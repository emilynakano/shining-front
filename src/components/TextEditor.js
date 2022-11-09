/* eslint-disable jsx-a11y/tabindex-no-positive */
import React, { useState, useRef, useCallback } from 'react';
import JoditEditor from 'jodit-react';

export default function TextEditor({ setContent, content }) {
  const editor = useRef(null);

  const config = useCallback(
    {
      readonly: false,
      height: '50vh',
      showCharsCounter: false,
      showWordsCounter: false,
      showXPathInStatusbar: false,
    },
    [],
  );
  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      tabIndex={1}
      onBlur={(newContent) => setContent(newContent)}
      onChange={(newContent) => setContent(newContent)}
    />
  );
}
