const lib = require('./lib')
const db = require('./db')
jest.mock('./db.js')

describe('absolute', ()=>{

    it(' should return a positive number if the number is positive', ()=>{
        const result = lib.absolute(2);
        expect(result).toBe(2);
     
     });
     
     it('absolute - should return a positive number if the number is negative', ()=>{
         const result = lib.absolute(-2);
         expect(result).toBe(2);
      
      });
     
      it('absolute - should return a positive number if the number is 0', ()=>{
         const result = lib.absolute(0);
         expect(result).toBe(0);
});

 
 });

 describe('Greet', ()=>{
    it('should return a greeting message',()=>{
        const result = lib.greet('kelvin');
        expect(result).toContain('kelvin');
    })
 })

 describe('Currencies', ()=>{
    it('should return a list of Currencies',()=>{
        const result = lib.currencies();
        expect(result).toEqual(expect.arrayContaining(['USD', 'KIK', 'NIG']))
    })
 })

 describe('Object', ()=>{
    it('should return the given id of a product',()=>{
        const result = lib.object(1);
        expect(result).toMatchObject({id: 1,});
    })
 })

 describe('Exceptions', ()=>{
    it('should throw if username is falsy',()=>{
        const agrs = [null, NaN, '', undefined, 0, false];
        agrs.forEach(a=>{
            expect(()=>{
                lib.registerUser(a).toThrow();
            })
        })
    
    });

    it('should return an object if username is valid', ()=>{
        const result = lib.registerUser('Kelvin');
        expect(result).toMatchObject({name: 'Kelvin'});
    })
 });

 describe('Discounts', () => {
    it('should apply discounts to customers with more than 10 points', () => {
        // Here we create a mock implementation of getCustomerSync
        db.getCustomerSync.mockImplementation((customerId) => {
            console.log('fake reading');
            return { id: customerId, points: 20 };
        });

        const order = { customerId: 1, totalPoints: 10 };
        lib.applyDiscount(order);

        expect(order.totalPoints).toBe(9);
        expect(db.getCustomerSync).toHaveBeenCalledWith(1);
    });
});