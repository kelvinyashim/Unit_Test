const ex = require('./excercise');


describe('Practise', ()=>{
    it('should throw an err if input isnt a num', ()=>{
        const arg = [NaN, null, '', undefined];
        arg.forEach(a=>{
            expect(()=>{
                ex.fizzbuzz(a).toThrow();
            })
        })
    });

    it('should return fizzbuzz if input is both divisible by 3 & 5', ()=>{
        const result = ex.fizzbuzz(15);
        expect(result).toBe('fizzbuzz');
    });

    it('should return fizz if input is only divisible by 3', ()=>{
        const result = ex.fizzbuzz(3);
        expect(result).toBe('fizz');
    });

    it('should return fizz if input is only divisible by 5', ()=>{
        const result = ex.fizzbuzz(5);
        expect(result).toBe('buzz');
    });

    it('should return input if all other coditions arent met', ()=>{
      const result =  ex.fizzbuzz(7);
      expect(result).toBe(7);

    })
})