function pairElement(str) {
  return str.split('').map(x=>{
    return x = (
      x == "C" ? [x,"G"] 
      : x == "G" ? [x,"C"]
      : x == "T" ? [x,"A"]
      : x == "A" ? [x,"T"]
      : None)
  })
}

pairElement("GCG");
console.log(pairElement('GCG'))