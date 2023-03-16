import React from "react";
import "./FloatingButton.css";

export default function FloatingButton({ title, id }) {
  return <a className={id}>{title}</a>;
}
