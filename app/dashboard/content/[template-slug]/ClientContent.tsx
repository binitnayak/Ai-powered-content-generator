
"use client";

import React, { useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "@/app/types";

interface PROPS {
  selectedTemplate?: TEMPLATE;
}

export default function ClientContent({ selectedTemplate }: PROPS) {
  const [aiOutput, setAiOutput] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const generateAIContent = async (formData: any) => {
    if (!selectedTemplate) return;

    setLoading(true);

    const FinalAIPrompt =
      JSON.stringify(formData) + ", " + selectedTemplate.aiPrompt;

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // ✅ VERY IMPORTANT
        },
        body: JSON.stringify({
          prompt: FinalAIPrompt,
        }),
      });

      const data = await res.json();

      // ✅ handle backend error
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setAiOutput(data.text);
    } catch (e: any) {
      console.error("CLIENT ERROR:", e);
      setAiOutput("Error generating content: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-5">
      <FormSection
        selectedTemplate={selectedTemplate}
        userFormClick={generateAIContent}
        loading={loading}
      />

      <OutputSection aiOutput={aiOutput} />
    </div>
  );
}