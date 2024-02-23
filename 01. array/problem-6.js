var convert = function (s, nRows) {
  let c = s.split('');
  let len = c.length;
  let sb = new Array(nRows).fill('');

  let i = 0;
  while (i < len) {
    for (let idx = 0; idx < nRows && i < len; idx++) {
      // vertically down
      sb[idx] += c[i++];
    }
    for (let idx = nRows - 2; idx >= 1 && i < len; idx--) {
      // obliquely up
      sb[idx] += c[i++];
    }
  }

  for (let idx = 1; idx < sb.length; idx++) {
    sb[0] += sb[idx];
  }

  return sb[0];
};
