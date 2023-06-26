// A palindrome is a word or sentence that's spelled the same way both forward and backward,
// ignoring punctuation, case, and spacing.
function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]*/g, "")
  for (let i = str.length - 1, j = 0; i >= 0, j < str.length; i--, j++) {
    if (str[i] !== str[j]) {
      return false
    }
  }
  return true
}
let text1 = "never odd or even"
let text2 = "A man, a plan, a canal. Panama"
let text3 = "almostomla"
console.log("--- PALINDROME CHECKER ---")
console.log(`${text1} => ${palindrome(text1)}`)
console.log(`${text2} => ${palindrome(text2)}`)
console.log(`${text3} => ${palindrome(text3)}`)
