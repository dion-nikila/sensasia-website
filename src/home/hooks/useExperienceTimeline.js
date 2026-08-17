import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined" && typeof window.matchMedia === "function") {
  gsap.registerPlugin(ScrollTrigger);
}

function sceneAt(progress) {
  if (progress < 0.34) return "ARRIVAL";
  if (progress < 0.46) return "TRANSITION";
  return "TABLE";
}

function localProgress(progress, scene) {
  const ranges = {
    ARRIVAL: [0, 0.34],
    TRANSITION: [0.34, 0.46],
    TABLE: [0.46, 1],
  };
  const [start, end] = ranges[scene];
  return Math.max(0, Math.min(1, (progress - start) / (end - start)));
}

export default function useExperienceTimeline({ rootRef, reducedMotion, debugEnabled, onSceneChange }) {
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || reducedMotion) {
      onSceneChange("STATIC");
      setReady(false);
      return undefined;
    }

    let activeScene = "ARRIVAL";
    let media;
    const updateProgress = (progress) => {
      const nextScene = sceneAt(progress);
      if (nextScene !== activeScene) {
        activeScene = nextScene;
        if (nextScene === "TRANSITION" && root.contains(document.activeElement)) {
          document.activeElement?.blur?.();
        }
        onSceneChange(nextScene);
      }
      if (!debugEnabled) return;
      const globalNode = root.querySelector("[data-debug-global]");
      const localNode = root.querySelector("[data-debug-local]");
      const sceneNode = root.querySelector("[data-debug-scene]");
      const viewportNode = root.querySelector("[data-debug-viewport]");
      if (globalNode) globalNode.textContent = `${Math.round(progress * 100)}%`;
      if (localNode) localNode.textContent = `${Math.round(localProgress(progress, nextScene) * 100)}%`;
      if (sceneNode) sceneNode.textContent = nextScene;
      if (viewportNode) viewportNode.textContent = `${window.innerWidth}×${window.innerHeight}`;
    };

    const context = gsap.context(() => {
      media = gsap.matchMedia();
      media.add({ mobile: "(max-width: 700px)", desktop: "(min-width: 701px)" }, ({ conditions }) => {
        const mobile = conditions.mobile;
        gsap.set(".sx-table-scene", { autoAlpha: 1, clipPath: "inset(0 0 0 100%)" });

        const timeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom bottom",
            scrub: mobile ? 0.14 : 0.24,
            invalidateOnRefresh: true,
            onUpdate: ({ progress }) => updateProgress(progress),
            onRefresh: ({ progress }) => updateProgress(progress),
          },
        });

        timeline
          .to(".arrival-image", { scale: mobile ? 1.06 : 1.045, duration: 0.3 }, 0)
          .to(".arrival-shade", { opacity: 0.7, duration: 0.3 }, 0)
          .to(".arrival-light", { opacity: 1, scale: 1.12, duration: 0.3 }, 0)
          .to(".arrival-content", { y: mobile ? -14 : -22, duration: 0.28 }, 0)
          .to(".arrival-scroll-cue", { autoAlpha: 0, duration: 0.05 }, 0.08)
          .to(".arrival-content", { autoAlpha: 0, y: mobile ? -52 : -42, duration: 0.06 }, 0.28)
          .to(".sx-table-scene", { clipPath: "inset(0 0 0 0%)", duration: 0.09, ease: "power2.inOut" }, 0.34)
          .set(".arrival-scene", { autoAlpha: 0 }, 0.435)
          .fromTo(".sx-table-surface", { scale: 1.025 }, { scale: 1, duration: 0.16 }, 0.34)
          .fromTo(".sx-table-rule", { scaleX: 0 }, { scaleX: 1, transformOrigin: "left", duration: 0.1, ease: "power1.out" }, 0.38)
          .fromTo(".sx-table-copy", { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 0.13 }, 0.39)
          .fromTo(".sx-rice-dish", { xPercent: mobile ? 15 : 11, rotation: 8, scale: 0.95 }, { xPercent: 0, rotation: mobile ? 4 : 2, scale: 1, duration: 0.17, ease: "power1.out" }, 0.36)
          .fromTo(".sx-side-dish", { xPercent: -18, rotation: -10 }, { xPercent: 0, rotation: -6, duration: 0.14, ease: "power1.out" }, 0.43)
          .fromTo(".sx-hot-dish", { yPercent: 20, scale: 1.02 }, { yPercent: 0, scale: 1, duration: 0.17, ease: "power1.out" }, 0.43)
          .fromTo(".sx-table-ghost", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.12 }, 0.38)
          .fromTo(".sx-table-meta", { autoAlpha: 0, x: -8 }, { autoAlpha: 1, x: 0, duration: 0.09 }, 0.5)
          .fromTo(".sx-dish-note", { autoAlpha: 0, y: 6 }, { autoAlpha: 1, y: 0, stagger: 0.015, duration: 0.065 }, 0.52)
          // Keep the authored 0–1 timing scale intact after the visual tweens finish.
          .to({}, { duration: 0.4 }, 0.6);

        return () => timeline.kill();
      });
    }, root);

    updateProgress(0);
    setReady(true);
    let mounted = true;
    const refresh = () => {
      if (mounted) ScrollTrigger.refresh();
    };
    const refreshFrame = window.requestAnimationFrame(refresh);
    document.fonts?.ready?.then(refresh).catch(() => {});

    return () => {
      mounted = false;
      window.cancelAnimationFrame(refreshFrame);
      media?.revert();
      context.revert();
    };
  }, [rootRef, reducedMotion, debugEnabled, onSceneChange]);

  return ready;
}
