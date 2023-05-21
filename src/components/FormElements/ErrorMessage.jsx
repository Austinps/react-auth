import React from "react";

export default function ErrorMessage({ message }) {
  return <p className={message ? "errmsg" : "offscreen"}>{message}</p>;
}
