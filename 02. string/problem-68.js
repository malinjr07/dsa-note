var fullJustify = function (words, maxWidth) {
  let line = [],
    res = [],
    lineCharLength = 0;
  let i = 0;
  while (i < words.length) {
    if (lineCharLength + line.length + words[i].length > maxWidth) {
      const spaces = maxWidth - lineCharLength;
      const wordSpace = Math.floor(spaces / Math.max(line.length - 1, 1));
      let extraSpace = spaces % Math.max(line.length - 1, 1);
      for (let j = 0; j < line.length; j++) {
        line[j] += ' '.repeat(wordSpace);
        if (extraSpace) {
          line[j] += ' ';
          extraSpace -= 1;
        }
      }
      const lineStr = line.join('');
      res.push(lineStr);
      line = [];
      lineCharLength = 0;
    } else {
      line.push(words[i]);
      lineCharLength += words[i].length;
      i++;
    }
  }
  const lastLine = line.join(' ');
  const extraSpace = maxWidth - lastLine.length;
  res.push(lastLine + ' '.repeat(Math.max(extraSpace, 0)));
  return res;
};

console.log(
  fullJustify(
    ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'],
    16
  )
);
