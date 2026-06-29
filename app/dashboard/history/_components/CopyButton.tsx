"use client";

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface PROPS {
  text: string;
}

export default function CopyButton({ text }: PROPS) {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button 
      onClick={onCopy}
      className="flex items-center gap-1 text-purple-600 hover:text-purple-800 transition-colors font-semibold text-sm"
    >
      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
