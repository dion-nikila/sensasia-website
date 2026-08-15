import React from "react";

export default function ExperienceDebug({ scene = "ARRIVAL" }) {
  return (
    <aside className="sx-debug" aria-hidden="true">
      <span>Scene: <b data-debug-scene>{scene}</b></span>
      <span>Global: <b data-debug-global>0%</b></span>
      <span>Local: <b data-debug-local>0%</b></span>
      <span data-debug-viewport>390×844</span>
    </aside>
  );
}
