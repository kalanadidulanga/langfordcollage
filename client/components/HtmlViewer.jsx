"use client";

import React from "react";
import {useEditor, EditorContent} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Heading from "@tiptap/extension-heading";

const HtmlViewer = ({htmlContent}) => {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: false,
            }),
            BulletList,
            OrderedList,
            TextStyle,
            Underline,
            Link.configure({
                autolink: true,
                openOnClick: true,
            }),
            Heading.configure({
                levels: [1, 2],
            }),
        ],
        content: htmlContent || "<p>No content available</p>",
        editable: false, // 🔐 Make it read-only
    });

    if (!editor) return null;

    return (
        <>
            <style jsx global>{`
                .ProseMirror {
                    outline: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    height: 100%;
                }

                .ProseMirror h1 {
                    font-size: 1.875rem;
                    font-weight: bold;
                }

                .ProseMirror h2 {
                    font-size: 1.5rem;
                    font-weight: bold;
                }

                .ProseMirror p {
                    font-size: 1rem;
                }
                .ProseMirror a {
                    color: #0366d6; /* Blue color */
                    text-decoration: underline;
                    cursor: pointer;
                }
            `}</style>
            <div className="prose max-w-none">
                <EditorContent editor={editor}/>
            </div>
        </>

    );
};

export default HtmlViewer;