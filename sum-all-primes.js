function sumPrimes(num) {
    const primes = [];
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    function isPrime(x) {
        for (let i = 2; i < x; i++) {
            if (x % i == 0) {
                return false;
            }
        }
        return true;
    }
    return primes.reduce((a,b)=>a + b);
}
console.log(sumPrimes(10));