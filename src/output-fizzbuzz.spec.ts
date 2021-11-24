import { outputFizzbuzz } from './output-fizzbuzz';

describe('outputFizzbuzz', () => {
    const fizz = 'Fizz';
    const buzz = 'Buzz';
    const fizzbuzz = 'FizzBuzz';

    it('should print number 1 to x but for multiples of 3 print Fizz or for multiples of 5 print Buzz, or when both multiples of 3 and 5 then print FizzBuzz', () => {
        console.log = jest.fn();

        outputFizzbuzz(1, 30);

        expect(console.log).toHaveBeenNthCalledWith(1, 1);
        expect(console.log).toHaveBeenNthCalledWith(2, 2);
        expect(console.log).toHaveBeenNthCalledWith(3, fizz);
        expect(console.log).toHaveBeenNthCalledWith(4, 4);
        expect(console.log).toHaveBeenNthCalledWith(5, buzz);
        expect(console.log).toHaveBeenNthCalledWith(6, fizz);
        expect(console.log).toHaveBeenNthCalledWith(7, 7);
        expect(console.log).toHaveBeenNthCalledWith(8, 8);
        expect(console.log).toHaveBeenNthCalledWith(9, fizz);
        expect(console.log).toHaveBeenNthCalledWith(10, buzz)
        expect(console.log).toHaveBeenNthCalledWith(11, 11);
        expect(console.log).toHaveBeenNthCalledWith(12, fizz);
        expect(console.log).toHaveBeenNthCalledWith(13, 13);
        expect(console.log).toHaveBeenNthCalledWith(14, 14);
        expect(console.log).toHaveBeenNthCalledWith(15, fizzbuzz);
        expect(console.log).toHaveBeenNthCalledWith(16, 16);
        expect(console.log).toHaveBeenNthCalledWith(17, 17);
        expect(console.log).toHaveBeenNthCalledWith(18, fizz);
        expect(console.log).toHaveBeenNthCalledWith(19, 19);
        expect(console.log).toHaveBeenNthCalledWith(20, buzz);
        expect(console.log).toHaveBeenNthCalledWith(21, fizz)
        expect(console.log).toHaveBeenNthCalledWith(22, 22);
        expect(console.log).toHaveBeenNthCalledWith(23, 23);
        expect(console.log).toHaveBeenNthCalledWith(24, fizz);
        expect(console.log).toHaveBeenNthCalledWith(25, buzz);
        expect(console.log).toHaveBeenNthCalledWith(26, 26);
        expect(console.log).toHaveBeenNthCalledWith(27, fizz);
        expect(console.log).toHaveBeenNthCalledWith(28, 28);
        expect(console.log).toHaveBeenNthCalledWith(29, 29);
        expect(console.log).toHaveBeenNthCalledWith(30, fizzbuzz);
    });

    it('should print numbers from 1 to 100', () => {
        let numbers = 0, fizzes = 0, buzzes = 0, fizzbuzzes = 0;
        console.log = jest.fn((e) => {
            if (e === fizz) fizzes++;
            if (e === buzz) buzzes++;
            if (e === fizzbuzz) fizzbuzzes++;
            if (typeof(e) === 'number') {
                numbers++;
                expect(e).toBeGreaterThanOrEqual(1);
                expect(e).toBeLessThanOrEqual(100);
            }
        });

        outputFizzbuzz(1, 100);

        expect(fizzes).toBe(27);
        expect(buzzes).toBe(14);
        expect(fizzbuzzes).toBe(6);
        expect(numbers).toBe(100 - fizzes - buzzes - fizzbuzzes);
    })


});
