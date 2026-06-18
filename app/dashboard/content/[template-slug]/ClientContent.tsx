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
  const [error, setError] = useState<string>(""); // Track errors separately

  const generateAIContent = async (formData: any) => {
    if (!selectedTemplate) {
      setError("No template selected");
      return;
    }

    setLoading(true);
    setError(""); // Clear previous errors
    setAiOutput(""); // Clear previous output

    const FinalAIPrompt =
      JSON.stringify(formData) + ", " + selectedTemplate.aiPrompt;

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: FinalAIPrompt,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || `HTTP Error: ${res.status}`);
      }

      if (!data.text) {
        throw new Error("No content generated");
      }

      setAiOutput(data.text);
    } catch (e: any) {
      console.error("CLIENT ERROR:", e);
      const errorMsg = e.message || "Something went wrong";
      setError(errorMsg);
      setAiOutput(""); // Clear output on error
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

      <OutputSection 
        aiOutput={aiOutput} 
        error={error}
        isLoading={loading}
      />
    </div>
  );
}