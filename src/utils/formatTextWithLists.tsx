export const formatTextWithLists = (text: string) => {
  const ulText = text.trim().split('!s');

  return ulText
    .map((ul) =>
      ul
        .trim()
        .split('!li')
        .map((item) => {
          const trimmedItem = item.trim();

          const idMatch = trimmedItem.match(/!id=(\d+)/);
          const id = idMatch ? parseInt(idMatch[1], 10) : undefined;
          const text = id
            ? trimmedItem.replace(/!id=\d+/, '').trim()
            : trimmedItem;

          return { text, ...(id && { id }) };
        })
        .filter((item) => item.text !== '')
    )
    .filter((ul) => ul.length > 0);
};
