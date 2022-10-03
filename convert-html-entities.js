function convertHTML(str) {
  const entities = {
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    "'":'&apos;'
  }
  return str.replace(/[\&\<\>\"\']/g,(character)=>{
    return entities[character];
  })
}

convertHTML("Dolce & Gabbana");
console.log(convertHTML('hanburgers < pizza < tacos'))