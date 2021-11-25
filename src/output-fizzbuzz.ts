export const
    fizz = 'Fizz',
    buzz = 'Buzz',
    fizzbuzz = 'FizzBuzz';

export function outputFizzbuzz(start: number, end: number) {
    for (let i = start; i <= end; i++) {
        let output: number | string = i;
        if (isFizz(i) && isBuzz(i)) {
            output = "FizzBuzz";
        } else if (isBuzz(i)) {
            output = "Buzz";
        } else if (isFizz(i)) {
            output = "Fizz";
        }
        console.log(output);
    }
}

export function isFizz(n: number): boolean {
    return n % 3 === 0;
}

export function isBuzz(n: number): boolean {
    return n % 5 === 0;
}
