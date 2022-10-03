function myReplace(str, before, after) {
  const idx = str.search(before);
  if(/^[A-Z]/.test(before)){
    return str.replace(before, after[0].toUpperCase()+after.slice(1))
  } //before 是大寫時
  else{
    return str.replace(before, after[0].toLowerCase()+after.slice(1))
  }
  
  
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
console.log(myReplace("He is Sleeping on the couch",'Sleeping',"sitting"))
