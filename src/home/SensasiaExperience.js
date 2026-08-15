import React, { useMemo, useRef, useState } from "react";
import ArrivalScene from "./scenes/ArrivalScene";
import TableScene from "./scenes/TableScene";
import MusicScene from "./scenes/MusicScene";
import SceneWipe from "./transitions/SceneWipe";
import SteamTransition from "./transitions/SteamTransition";
import ExperienceDebug from "./experience/ExperienceDebug";
import useReducedMotion from "./hooks/useReducedMotion";
import useExperienceTimeline from "./hooks/useExperienceTimeline";

export default function SensasiaExperience() {
  const sequenceRef = useRef(null);
  const systemReducedMotion = useReducedMotion();
  const [currentScene, setCurrentScene] = useState("ARRIVAL");
  const debugOptions = useMemo(() => {
    const search = typeof window === "undefined" ? new URLSearchParams() : new URLSearchParams(window.location.search);
    const enabled = process.env.NODE_ENV !== "production" && search.get("debug") === "true";
    return { enabled, forceReducedMotion: enabled && search.get("motion") === "reduce" };
  }, []);
  const reducedMotion = systemReducedMotion || debugOptions.forceReducedMotion;
  const motionReady = useExperienceTimeline({
    rootRef: sequenceRef,
    reducedMotion,
    debugEnabled: debugOptions.enabled,
    onSceneChange: setCurrentScene,
  });
  const isInteractive = (scene) => reducedMotion || currentScene === scene;
  const skipExperience = (event) => {
    event.preventDefault();
    const anchor = sequenceRef.current?.querySelector("#experience-end");
    if (!anchor) return;
    const html = document.documentElement;
    const previousBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo({ top: anchor.getBoundingClientRect().top + window.scrollY, left: 0 });
    anchor.focus({ preventScroll: true });
    html.style.scrollBehavior = previousBehavior;
  };

  return (
    <main className="sensasia-experience">
      <a className="sx-skip-experience" href="#experience-end" onClick={skipExperience}>Skip to live nights</a>
      <div
        ref={sequenceRef}
        className={`sx-sequence ${motionReady ? "is-motion-ready" : ""} ${reducedMotion ? "is-static" : ""}`}
      >
        <div className={`sx-stage ${currentScene === "WIPE" || currentScene === "STEAM" ? "is-transitioning" : ""}`}>
          <ArrivalScene active={isInteractive("ARRIVAL")} staticMode={reducedMotion} />
          <TableScene active={isInteractive("TABLE")} staticMode={reducedMotion} />
          <MusicScene active={isInteractive("MUSIC")} staticMode={reducedMotion} />
          <SceneWipe />
          <SteamTransition />
        </div>
        <span id="experience-end" className="sx-end-anchor" tabIndex="-1" />
        {debugOptions.enabled && <ExperienceDebug scene={currentScene} />}
      </div>
    </main>
  );
}
