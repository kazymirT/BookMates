import React from 'react';

export const formatTextWithSpans = (text: string): React.ReactNode[] => {
  const paragraphs = text.split('!p').map((paragraph) => paragraph.trim());

  const formatParagraph = (paragraph: string): React.ReactNode[] => {
    const parts = paragraph.split(/(\[\[|\]\])/);

    let isSpanOpen = false;
    return parts.map((part, index) => {
      if (part === '[[') {
        isSpanOpen = true;
        return null;
      } else if (part === ']]') {
        isSpanOpen = false;
        return null;
      } else if (isSpanOpen) {
        return <span key={index}>{part}</span>;
      } else {
        return part;
      }
    });
  };

  const formattedText = paragraphs.map((paragraph, index) => (
    <React.Fragment key={index}>{formatParagraph(paragraph)}</React.Fragment>
  ));

  return formattedText;
};
