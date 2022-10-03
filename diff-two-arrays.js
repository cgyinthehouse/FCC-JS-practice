function diffArray(arr1, arr2) {
  const arr = arr1.concat(arr2);
  const res = [];
  for (let i of arr){
    if(arr1.includes(i) && arr2.includes(i)){
          continue;
        }else{
          res.push(i)
        }
  }
  return res 
}

  

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))