import React, { useState } from 'react';
import { Editor, EditorState, RichUtils, convertToRaw, ContentState } from 'draft-js';
import 'draft-js/dist/Draft.css';

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // Function to handle changes in the editor's content
  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  // Toggle inline styles (bold, italic, underline)
  const toggleInlineStyle = (style) => {
    const newState = RichUtils.toggleInlineStyle(editorState, style);
    setEditorState(newState);
  };

  // Toggle block styles (bullet, heading, text alignment)
  const toggleBlockStyle = (blockType) => {
    const newState = RichUtils.toggleBlockType(editorState, blockType);
    setEditorState(newState);
  };

  return (
    <div className="w-full border border-gray-300 rounded-lg px-4 py-2">
      {/* Toolbar with Tailwind classes */}
      <div className="flex gap-4 mb-4 justify-end">
        <button
          onClick={() => toggleInlineStyle('BOLD')}
          className="p-2 w-10 bg-gray-200 hover:bg-gray-300 rounded-lg flex justify-center"
        >
          <img src="/images/richtextedit/bold.svg" alt="bold" className='w-3'/>
        </button>
        <button
          onClick={() => toggleInlineStyle('ITALIC')}
          className="p-2 w-10 bg-gray-200 hover:bg-gray-300 rounded-lg flex justify-center"
        >
          <img src="/images/richtextedit/italic.svg" alt="italic" className='w-3'/>
        </button>
        <button
          onClick={() => toggleInlineStyle('UNDERLINE')}
          className="p-2 w-10 bg-gray-200 hover:bg-gray-300 rounded-lg flex justify-center"
        >
          <img src="/images/richtextedit/underline.svg" alt="underline" className='w-3'/>
        </button>
        <button
          onClick={() => toggleBlockStyle('unordered-list-item')}
          className="p-2 w-10 bg-gray-200 hover:bg-gray-300 rounded-lg flex justify-center"
        >
          <img src="/images/richtextedit/list.svg" alt="bullet" className='w-4'/>
        </button>
      </div>

      {/* Editor */}
      <div className="border p-4 rounded-lg bg-white h-[200px]">
        <Editor
          editorState={editorState}
          onChange={handleEditorChange}
          placeholder="Start typing here..."
          className="p-2 border-none focus:outline-none"
        />
      </div>
    </div>
  );
};

export default RichTextEditor;
