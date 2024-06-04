function countUpperCase(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if ('A' <= str[i] && str[i] <= 'Z') {
      count++;
    }
  }
  return count === 0 ? 'The Strings is not contain upper char' : count;
}
