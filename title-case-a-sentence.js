function titleCase(str) {
  let arr = str.split(' ');
  for (let i in arr){
    let upper = arr[i][0].toUpperCase();
    let lower = arr[i].slice(1).toLowerCase();
    arr[i] = upper+lower;
  }
  return arr.join(' ');
}

titleCase("I'm a little tea pot");
console.log(titleCase('I\'m a little tea pot'))