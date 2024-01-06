import React, { useState, useRef } from 'react';
import './desrestaurant.css';
import JoditEditor from 'jodit-react';

const Desrestaurant = ({ create, Setcreate }) => {
  const editor = useRef(null);

  const stripHtmlTags = (htmlString) => {
    const doc = new DOMParser().parseFromString(htmlString, 'text/html');
    return doc.body.textContent || '';
  };

  const handleDescriptionChange = (content) => {
    const sanitizedContent = stripHtmlTags(content);
    Setcreate({
      ...create,
      description: sanitizedContent.trim(),
    });
  };


  return (
    <div className="des-restaurant">
      <span className="title-des">MÔ TẢ NHÀ HÀNG</span>
      <div className="text-editor">
        <JoditEditor
          ref={editor}
          value={create.description}
          onBlur={handleDescriptionChange}
          placeholder="Start writing..." // Set a placeholder
          // Pass the editor configuration
        />
      </div>
    </div>
  );
};

export default Desrestaurant;
