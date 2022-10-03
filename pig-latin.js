function translatePigLatin(str) {
  let regexp = /^[^aeiou]+/;
  let consonants = str.match(regexp); //array
  return str.match(regexp) !== null //開頭是vowel時
  ? str.replace(regexp,'')+consonants+'ay'
  : str+'way' ;
  
}

translatePigLatin("consonant");
console.log(translatePigLatin('glove'))