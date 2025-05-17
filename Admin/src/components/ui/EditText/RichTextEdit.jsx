"use client";

import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Heading from "@tiptap/extension-heading";

// Lucide Icons
import {
    Bold as BoldIcon,
    Italic as ItalicIcon,
    Underline as UnderlineIcon,
    List as ListUnorderedIcon,
    ListOrdered as ListOrderedIcon,
    Type as TextSizeIcon,
    Link2 as LinkIcon,
} from "lucide-react";

const RichTextEditor = ({ htmlContent, setHtmlContent }) => {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: false, // Disable built-in heading
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
                levels: [1, 2], // Only allow H1 and H2
            }),
        ],
        content: htmlContent,
        onUpdate({ editor }) {
            const html = editor.getHTML();
            console.log(html)
            setHtmlContent(html);
        },
    });

    if (!editor) return null;

    const applyHeading = (level) => {
        if (level === "paragraph") {
            editor.chain().focus().setParagraph().run();
        } else {
            editor.chain().focus().setHeading({ level }).run();
        }
    };

    const insertLink = () => {
        const url = prompt("Enter URL");
        if (url) {
            editor.chain().focus().setLink({ href: url }).run();
        }
    };

    return (
        <div className="w-full border border-gray-300 rounded-lg px-4 py-2">
            {/* Toolbar */}
            <div className="flex flex-wrap gap-1 mb-4 justify-end">
                {/* Bold */}
                <button
                    title="Bold (Ctrl+B)"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={`p-2 w-10 bg-gray-200 hover:bg-gray-300 rounded-lg flex justify-center ${editor.isActive("bold") ? "bg-blue-100" : ""
                        }`}
                    type="button"
                >
                    <BoldIcon size={16} />
                </button>

                {/* Italic */}
                <button
                    title="Italic (Ctrl+I)"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={`p-2 w-10 bg-gray-200 hover:bg-gray-300 rounded-lg flex justify-center ${editor.isActive("italic") ? "bg-blue-100" : ""
                        }`}
                    type="button"
                >
                    <ItalicIcon size={16} />
                </button>

                {/* Underline */}
                <button
                    title="Underline (Ctrl+U)"
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    className={`p-2 w-10 bg-gray-200 hover:bg-gray-300 rounded-lg flex justify-center ${editor.isActive("underline") ? "bg-blue-100" : ""
                        }`}
                    type="button"
                >
                    <UnderlineIcon size={16} />
                </button>

                {/* Bullet List */}
                <button
                    title="Bullet List"
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={`p-2 w-10 bg-gray-200 hover:bg-gray-300 rounded-lg flex justify-center ${editor.isActive("bulletList") ? "bg-blue-100" : ""
                        }`}
                    type="button"
                >
                    <ListUnorderedIcon size={16} />
                </button>

                {/* Ordered List */}
                <button
                    title="Numbered List"
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={`p-2 w-10 bg-gray-200 hover:bg-gray-300 rounded-lg flex justify-center ${editor.isActive("orderedList") ? "bg-blue-100" : ""
                        }`}
                    type="button"
                >
                    <ListOrderedIcon size={16} />
                </button>

                {/* Normal Text Button */}
                <button
                    title="Normal Text"
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={`p-2 w-10 bg-gray-200 hover:bg-gray-300 rounded-lg flex justify-center ${editor.isActive("paragraph") ? "bg-blue-100" : ""
                        }`}
                    type="button"
                >
                    <span className="text-xs">N</span>
                </button>

                {/* Heading 1 Button */}
                <button
                    title="Heading 1"
                    onClick={() => editor.chain().focus().setHeading({ level: 1 }).run()}
                    className={`p-2 w-10 bg-gray-200 hover:bg-gray-300 rounded-lg flex justify-center ${editor.isActive("heading", { level: 1 }) ? "bg-blue-100" : ""
                        }`}
                    type="button"
                >
                    <span className="text-sm font-bold">H1</span>
                </button>

                {/* Heading 2 Button */}
                <button
                    title="Heading 2"
                    onClick={() => editor.chain().focus().setHeading({ level: 2 }).run()}
                    className={`p-2 w-10 bg-gray-200 hover:bg-gray-300 rounded-lg flex justify-center ${editor.isActive("heading", { level: 2 }) ? "bg-blue-100" : ""
                        }`}
                    type="button"
                >
                    <span className="text-sm font-bold">H2</span>
                </button>

                {/* Link Button */}
                <button
                    title="Insert Link"
                    onClick={insertLink}
                    className={`p-2 w-10 bg-gray-200 hover:bg-gray-300 rounded-lg flex justify-center ${editor.isActive("link") ? "bg-blue-100" : ""
                        }`}
                    type="button"
                >
                    <LinkIcon size={16} />
                </button>
            </div>

            {/* Editor Content */}
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
      `}</style>

            <div className="prose max-w-none border grid grid-cols-1 p-4 rounded-lg bg-white min-h-[200px] max-h-[300px] overflow-auto relative">
                <EditorContent editor={editor} />

                {/* Placeholder */}
                {editor.isEmpty && !editor.isFocused && (
                    <div className="absolute top-4 left-4 text-gray-400 pointer-events-none select-none">
                        Start typing here...
                    </div>
                )}
            </div>
        </div>
    );
};

export default RichTextEditor;