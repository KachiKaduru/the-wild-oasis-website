"use client";

import { useState } from "react";

function TextExpander({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const preview = children.split(" ").slice(0, 40);

  const displayText = isExpanded ? children : children.split(" ").slice(0, 40).join(" ") + "...";

  return (
    <span>
      {displayText}{" "}
      <button
        className={`text-primary-700 border-b border-primary-700 leading-3 pb-1 ${
          preview.length < 10 ? "hidden" : "inline"
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </span>
  );
}

export default TextExpander;
