export function fizzbuzz(count: number) {
    for (let i = 1; i <= count; i++) {

        if (i % 3 === 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }

    }
}
