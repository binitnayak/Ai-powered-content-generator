// // 
// "use client";

// import React, { useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Copy } from "lucide-react";

// import { useEditor, EditorContent } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";

// interface PROPS {
//   aiOutput: string;
// }

// function OutputSection({ aiOutput }: PROPS) {
//   const editor = useEditor({
//     extensions: [StarterKit],
//     content: "<p>Your result will appear here...</p>",
//   });

//   useEffect(() => {
//     if (editor && aiOutput) {
//       editor.commands.setContent(aiOutput);
//     }
//   }, [aiOutput, editor]);

//   return (
//     <div className="bg-white shadow-lg border rounded-lg">
//       <div className="flex justify-between items-center p-5">
//         <h2 className="font-bold text-lg">Your Result</h2>
//         <Button
//           className="flex gap-2"
//           onClick={() => {
//             if (editor) {
//               navigator.clipboard.writeText(editor.getHTML());
//             }
//           }}
//         >
//           <Copy className="w-4 h-4" /> Copy
//         </Button>
//       </div>

//       <div className="p-5">
//         <EditorContent editor={editor} />
//       </div>
//     </div>
//   );
// }

// export default OutputSection;

// _components/OutputSection.tsx
"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Copy, AlertCircle, Loader } from "lucide-react";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

interface PROPS {
  aiOutput: string;
  error?: string;
  isLoading?: boolean;
}

function OutputSection({ aiOutput, error, isLoading }: PROPS) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Your result will appear here...</p>",
  });

  useEffect(() => {
    if (editor && aiOutput) {
      editor.commands.setContent(aiOutput);
    }
  }, [aiOutput, editor]);

  const handleCopy = () => {
    if (editor) {
      const text = editor.getText(); // Copy plain text instead of HTML
      navigator.clipboard.writeText(text);
      // Optional: Show toast notification
      alert("Copied to clipboard!");
    }
  };

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-bold text-lg">Your Result</h2>
        <Button
          className="flex gap-2"
          onClick={handleCopy}
          disabled={isLoading || !aiOutput || !!error}
        >
          <Copy className="w-4 h-4" /> Copy
        </Button>
      </div>

      <div className="p-5 border-t">
        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-12 text-gray-500">
            <Loader className="w-5 h-5 animate-spin mr-2" />
            <span>Generating content...</span>
          </div>
        )}

        {/* Error State */}
        {error && !isLoading && (
          <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-red-700">Error</p>
              <p className="text-red-600 text-sm mt-1">{error}</p>
            </div>
          </div>
        )}

        {/* Editor Content */}
        {!isLoading && !error && (
          <EditorContent editor={editor} className="prose prose-sm max-w-none" />
        )}
      </div>
    </div>
  );
}

export default OutputSection;