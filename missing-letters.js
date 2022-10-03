function fearNotLetter(str) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const start = letters.indexOf(str[0]);
  const end = letters.indexOf(str[str.length-1]);
  const section = letters.slice(start, end+1);
  return section.split('').filter(x=>str.includes(x)==false)[0]
  }

fearNotLetter("abce");
console.log(fearNotLetter('abce'))