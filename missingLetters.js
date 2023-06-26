function fearNotLetter(str) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const start = letters.indexOf(str[0]);
  const end = letters.indexOf(str[str.length-1]);
  const section = letters.slice(start, end+1);
  return section.split('').filter(x=>str.includes(x)==false)[0]
  }

function fearNotLetter(str){
  const letters = 'abcdefghijklmnopqrstuvwxyz'
  for (let i = letters.indexOf(str[0]),j = 0; j < str.length; j++) {
    if (str[j] !== letters[i+j]) return letters[i+j]
  }
}

console.log(fearNotLetter('hijklmnpqr'))
console.log(fearNotLetter('stuvxyz'))
// function fearNotLetter(str) {
//   for (let i = 1; i < str.length; ++i) {
//     if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
//       return String.fromCharCode(str.charCodeAt(i - 1) + 1);
//     }
//   }
// }
// console.log(fearNotLetter('hijklmnpqr'))
