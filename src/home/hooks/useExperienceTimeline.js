import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined" && typeof window.matchMedia === "function") {
  gsap.registerPlugin(ScrollTrigger);
}

function sceneAt(progress) {
  if (progress < 0.215) return "ARRIVAL";
  if (progress < 0.415) return "WIPE";
  if (progress < 0.64) return "TABLE";
  if (progress < 0.84) return "STEAM";
  return "MUSIC";
}

function localProgress(progress, scene) {
  const ranges = {
    ARRIVAL: [0, 0.215],
    WIPE: [0.215, 0.415],
    TABLE: [0.415, 0.64],
    STEAM: [0.64, 0.84],
    MUSIC: [0.84, 1],
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
        if ((nextScene === "WIPE" || nextScene === "STEAM") && root.contains(document.activeElement)) {
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
        gsap.set(".sx-table-scene, .sx-music-scene", { autoAlpha: 0 });
        gsap.set(".sx-scene-wipe", { autoAlpha: 1, xPercent: 100 });
        gsap.set(".sx-steam-transition", { autoAlpha: 0 });
        gsap.set(".sx-steam-plume", { autoAlpha: 0, yPercent: 35, scaleX: 0.55, scaleY: 0.55 });
        gsap.set(".sx-steam-curtain", { autoAlpha: 0, scale: 0.65 });

        const timeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.45,
            invalidateOnRefresh: true,
            onUpdate: ({ progress }) => updateProgress(progress),
            onRefresh: ({ progress }) => updateProgress(progress),
          },
        });

        timeline
          .to(".arrival-image", { scale: mobile ? 1.075 : 1.055, duration: 0.14 }, 0)
          .to(".arrival-shade", { opacity: 0.72, duration: 0.14 }, 0)
          .to(".arrival-light", { opacity: 1, scale: 1.15, duration: 0.14 }, 0)
          .to(".arrival-content", { y: mobile ? -15 : -24, duration: 0.14 }, 0)
          .to(".arrival-scroll-cue", { autoAlpha: 0, duration: 0.04 }, 0.055)
          .to(".arrival-content", { autoAlpha: 0, y: mobile ? -66 : -48, duration: 0.075 }, 0.145)
          .to(".sx-scene-wipe", { xPercent: 0, duration: 0.085, ease: "power2.inOut" }, 0.215)
          .set(".sx-table-scene", { autoAlpha: 1 }, 0.305)
          .set(".arrival-scene", { autoAlpha: 0 }, 0.305)
          .to(".sx-scene-wipe", { xPercent: -100, duration: 0.1, ease: "power2.inOut" }, 0.312)
          .set(".sx-scene-wipe", { autoAlpha: 0 }, 0.415)
          .fromTo(".sx-table-surface", { scale: 1.035 }, { scale: 1, duration: 0.11 }, 0.305)
          .fromTo(".sx-table-copy", { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.09 }, 0.37)
          .fromTo(".sx-rice-dish", { xPercent: mobile ? 18 : 12, rotation: 9, scale: 0.94 }, { xPercent: 0, rotation: mobile ? 4 : 2, scale: 1, duration: 0.13, ease: "power1.out" }, 0.34)
          .fromTo(".sx-side-dish", { xPercent: -22, rotation: -10 }, { xPercent: 0, rotation: -6, duration: 0.11, ease: "power1.out" }, 0.39)
          .fromTo(".sx-hot-dish", { yPercent: 24, scale: 1.025 }, { yPercent: 0, scale: 1, duration: 0.13, ease: "power1.out" }, 0.405)
          .fromTo(".sx-dish-note", { autoAlpha: 0, y: 6 }, { autoAlpha: 1, y: 0, stagger: 0.015, duration: 0.055 }, 0.475)
          .set(".sx-steam-transition", { autoAlpha: 1 }, 0.59)
          .to(".sx-steam-plume", { autoAlpha: 0.82, yPercent: -94, xPercent: (index) => [-18, 5, 22][index], scaleX: 1.05, scaleY: 1.5, rotation: (index) => [-7, 4, -3][index], stagger: 0.015, duration: 0.13, ease: "power1.out" }, 0.6)
          .to(".sx-steam-curtain", { autoAlpha: 1, scale: 1.22, duration: 0.11, ease: "power1.in" }, 0.65)
          .set(".sx-music-scene", { autoAlpha: 1 }, 0.76)
          .set(".sx-table-scene", { autoAlpha: 0 }, 0.765)
          .fromTo(".sx-music-image", { scale: mobile ? 1.12 : 1.08 }, { scale: 1.025, duration: 0.19 }, 0.76)
          .fromTo(".sx-music-shade", { opacity: 1 }, { opacity: 0.86, duration: 0.16 }, 0.76)
          .to(".sx-steam-transition", { autoAlpha: 0, duration: 0.085 }, 0.765)
          .fromTo(".sx-music-copy", { autoAlpha: 0, y: 34 }, { autoAlpha: 1, y: 0, duration: 0.1, ease: "power1.out" }, 0.82)
          .to(".sx-music-image", { scale: 1, duration: 0.1 }, 0.9);

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
