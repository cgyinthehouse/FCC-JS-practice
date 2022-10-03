function spinalCase(str) {
  return str.match(/[a-z]?[A-z][a-z]+/g).join('-').toLowerCase();
}

spinalCase('This Is Spinal Tap');
const res = spinalCase("this is Spinal_Tap")
console.log(res)