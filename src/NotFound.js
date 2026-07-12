import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return <main className="not-found container"><p className="eyebrow">404 · Wrong turn</p><h1>This table doesn’t exist.</h1><p>The page you were looking for has moved or never made it onto tonight’s menu.</p><Link className="button button-wine" to="/">Back to Sensasia</Link></main>;
}
