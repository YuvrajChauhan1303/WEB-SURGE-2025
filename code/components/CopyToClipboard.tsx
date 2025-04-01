// @typescript-eslint/no-unused-vars
"use client";

import React, { useState, useCallback } from "react";
import { IoCopyOutline } from "react-icons/io5";

interface CopyToClipboardProps {
  text: string;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ text }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        alert("Copied to Clipboard : " + text); // Show alert on success
        setTimeout(() => setCopied(false), 2000); // Reset icon after 2s
      })
      .catch((err) => console.error("Failed to copy:", err));
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 p-2 shadow-none text-black bg-transparent hover:bg-transparent active:scale-95 active:bg-secondary rounded-xl"
      aria-label={`Copy ${text} to clipboard`}
    >
      <IoCopyOutline />
    </button>
  );
};

export default CopyToClipboard;
