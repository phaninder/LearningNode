const expect = require ('expect');
const utils = require ('./utils');

describe('Utils',()=>{
    it('it should add two numbers',()=>{
        var res = utils.add(33,11);

        expect(res).toBe(44,`Expected 44,but got ${res}`)
        // if(res != 44)
        // {
        //     throw new Error(`Expected 44, but got ${res}.`);
        // }
    });

    it('Should async add two numbers',(done)=>{
        utils.asyncAdd(4,3,(sum)=>{
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });

    it('it Should square a number',()=>{
        var res = utils.square(5);
        
    expect(res).toBe(25).toBeA('number');
    }); 

    it('Should async Square a number',(don)=>{
        utils.asyncSquare(2,(square)=>{
            expect(square).toBe(4);
            don();
        })
    });

    it('Should have name in it',()=>{
    var user = 
    { 
            age: '29'};
            user = utils.setName(user,"Phaninder Malyala");
            expect(user).toBeA(Object).toInclude({firstName:'Phaninder',
        lastName:'Malyala'});
    });
});