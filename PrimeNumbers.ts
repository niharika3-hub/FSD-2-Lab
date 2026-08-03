function isPrime(num: number): boolean {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

const limit = 50;

console.log(`Prime numbers from 1 to ${limit}:`);

for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}