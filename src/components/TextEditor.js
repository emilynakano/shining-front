/* eslint-disable jsx-a11y/tabindex-no-positive */
import React, { useState, useRef, useCallback } from 'react';
import JoditEditor from 'jodit-react';

export default function TextEditor({
  setContent, content, height,
}) {
  const editor = useRef(null);

  const config = useCallback(
    {
      readonly: false,
      height,
      showCharsCounter: false,
      showWordsCounter: false,
      showXPathInStatusbar: false,
      disablePlugins: 'bold,class-span,fullsize,hr,search',
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
