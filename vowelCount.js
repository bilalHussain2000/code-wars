function getCount(str) {
    const vowelsRegex = /[aeiou]/g;
    const matches = str.match(vowelsRegex);
    return matches ? matches.length : 0;
  }