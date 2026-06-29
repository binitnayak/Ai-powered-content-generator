"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface PROPS {
  aiOutput: string;
}

function OutputSection({ aiOutput }: PROPS) {
  const handleCopy = () => {
    navigator.clipboard.writeText(aiOutput);
  };

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-bold text-lg">Your Result</h2>

        <Button className="flex gap-2" onClick={handleCopy}>
          <Copy className="w-4 h-4" /> Copy
        </Button>
      </div>

      <div className="p-5 border-t whitespace-pre-wrap min-h-[500px]">
        {aiOutput || "Your generated result will appear here..."}
      </div>
    </div>
  );
}

export default OutputSection;