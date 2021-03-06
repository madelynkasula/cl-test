import React from "react";
import * as style from "./text.module.scss";

export default function Text({ element, text }) {
  const Element = element || "span";
  return <Element className={style.text}>{text}</Element>;
}
