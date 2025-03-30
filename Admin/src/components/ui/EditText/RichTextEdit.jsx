"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Editor, EditorState, RichUtils, ContentState, convertToRaw } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import "draft-js/dist/Draft.css";

// Dynamically import `html-to-draftjs` to prevent SSR errors
const htmlToDraft = typeof window !== "undefined" ? require("html-to-draftjs").default : null;

const RichTextEditor = ({ htmlContent, setHtmlContent }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    if (typeof window !== "undefined" && htmlContent) {
      const contentBlock = htmlToDraft(htmlContent);
      if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
        setEditorState(EditorState.createWithContent(contentState));
      }
    }
  }, []);

  // Handle content changes
  const handleEditorChange = (state) => {
    setEditorState(state);
    const contentState = state.getCurrentContent();
    const html = stateToHTML(contentState); // Convert to HTML
    setHtmlContent(html);
  };

  // Toggle inline styles
  const toggleInlineStyle = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  // Toggle block styles
  const toggleBlockStyle = (blockType) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  return (
    <div className="w-full border border-gray-300 rounded-lg px-4 py-2">
      {/* Toolbar */}
      <div className="flex gap-4 mb-4 justify-end">
        {[
          { style: "BOLD", icon: "bold.svg", alt: "bold" },
          { style: "ITALIC", icon: "italic.svg", alt: "italic" },
          { style: "UNDERLINE", icon: "underline.svg", alt: "underline" },
          { style: "unordered-list-item", icon: "list.svg", alt: "bullet" },
        ].map(({ style, icon, alt }) => (
          <button
            key={style}
            onClick={() =>
              style === "unordered-list-item"
                ? toggleBlockStyle(style)
                : toggleInlineStyle(style)
            }
            className="p-2 w-10 bg-gray-200 hover:bg-gray-300 rounded-lg flex justify-center"
          >
            <img src={`/images/richtextedit/${icon}`} alt={alt} className="w-4" />
          </button>
        ))}
      </div>

      {/* Editor */}
      <div className="border p-4 rounded-lg bg-white min-h-[200px] max-h-[200px] overflow-auto">
        <Editor editorState={editorState} onChange={handleEditorChange} placeholder="Start typing here..." />
      </div>
    </div>
  );
};

export default RichTextEditor;
