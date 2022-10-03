function mutation(arr) {
  arr = arr.map(word => word.toLowerCase());
 let characters = arr[1].split('');
for (let i = 0;i<characters.length;i++){
  if(!arr[0].includes(characters[i])){
    return false;
  }
}
return true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["heylo", "hey"]));