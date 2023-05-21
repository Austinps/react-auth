import React from "react";

export default function ErrorMessage({ message }) {
  return (
    <p className={message ? "errmessage" : "offscreen"} aria-live="assertive">
      {message}
    </p>
  );
}
