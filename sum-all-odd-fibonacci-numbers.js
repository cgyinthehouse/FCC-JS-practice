function sumFibs(num){
    let fibs =[1,1];
       for (let i = 2, fib = 2; fib <= num; i++){ 
            fib = fibs[i-1]+ fibs[i-2];
            if(fib > num){
              break;
            }else{
              fibs.push(fib);
            }
    }
    return fibs.
    filter(x=>x%2==1).
    reduce((acc,cur)=>acc+cur)
}
console.log(sumFibs(4));
console.log(sumFibs(1000));