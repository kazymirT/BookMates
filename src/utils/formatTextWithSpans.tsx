export const formatTextWithSpans = (text: string) => {
  const parts = text.split(/(\[\[|\]\])/);

  let isSpanOpen = false;
  const formattedText = parts.map((part, index) => {
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

  return formattedText;
};
