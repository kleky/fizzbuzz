import {fizzbuzz} from "./fizzbuzz";

describe('fizzbuzz', () => {
    const fizz = 'Fizz';
    const buzz = 'Buzz';

    console.log = jest.fn();


    it('should output each number, Fizz for multiples of 3, or Buzz for multiples of 5', () => {
        const count = 20;

        fizzbuzz(count);

        expect(console.log).toHaveBeenNthCalledWith(1, 1);
        expect(console.log).toHaveBeenNthCalledWith(2, 2);
        expect(console.log).toHaveBeenNthCalledWith(3, fizz);
        expect(console.log).toHaveBeenNthCalledWith(4, 4);
        expect(console.log).toHaveBeenNthCalledWith(5, 5);          // buzz
        expect(console.log).toHaveBeenNthCalledWith(6, fizz);
        expect(console.log).toHaveBeenNthCalledWith(7, 7);
        expect(console.log).toHaveBeenNthCalledWith(8, 8);
        expect(console.log).toHaveBeenNthCalledWith(9, fizz);
        expect(console.log).toHaveBeenNthCalledWith(10, 10);        // buzz
        expect(console.log).toHaveBeenNthCalledWith(11, 11);
        expect(console.log).toHaveBeenNthCalledWith(12, fizz);
        expect(console.log).toHaveBeenNthCalledWith(13, 13);
        expect(console.log).toHaveBeenNthCalledWith(14, 14);
        expect(console.log).toHaveBeenNthCalledWith(15, fizz);
        expect(console.log).toHaveBeenNthCalledWith(16, 16);
        expect(console.log).toHaveBeenNthCalledWith(17, 17);
        expect(console.log).toHaveBeenNthCalledWith(18, fizz);
        expect(console.log).toHaveBeenNthCalledWith(19, 19);
        expect(console.log).toHaveBeenNthCalledWith(20, 20);
    });

});
