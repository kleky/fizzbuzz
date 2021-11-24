export function outputFizzbuzz(start: number, end: number) {
    for (let i = start; i <= end; i++) {

        if (isFizz(i) && isBuzz(i)) {
            console.log("FizzBuzz");
        } else if (isBuzz(i)) {
            console.log("Buzz");
        } else if (isFizz(i)) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}

export function isFizz(n: number): boolean {
    return n % 3 === 0;
}

export function isBuzz(n: number): boolean {
    return n % 5 === 0;
}
