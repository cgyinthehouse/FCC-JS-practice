function uniteUnique(...arr) {
  let arr1 = [];
  for (let i of arr){
    arr1.push(...i)
  }
  return Array.from(new Set(arr1));
}


uniteUnique();
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));