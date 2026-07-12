import React from "react";
import { EVENTS, SITE } from "./data";

export default function Events({ compact = false }) {
  return (
    <div className={`event-list ${compact ? "event-list-compact" : ""}`}>
      {EVENTS.map(({ day, shortDay, title, time, Icon }) => (
        <article className="event-card" key={day}>
          <time>{shortDay}</time>
          <Icon aria-hidden="true" />
          <div><h3>{title}</h3><p>{time}</p></div>
        </article>
      ))}
      <p className="event-note">Schedules can change. Call <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a> before travelling for a specific event.</p>
    </div>
  );
}
