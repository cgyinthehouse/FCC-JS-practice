// Given the array arr, iterate through and remove each element starting from 
// the first element until the function func returns true when the iterated element is passed through it.
function dropElements(arr, func){
    let result = [];
    for(var i=0; i<arr.length; i++){
        if(func(arr[i])){
            result = arr.slice(i, arr.length);
            break;
    }
}
return result;
}
console.log(dropElements([1,2,3,4],function(n){return n>=3}));