const request = require ('supertest');
const expect = require ('expect');

var app = require ('./Server').app;

describe("Server",()=>{
    describe('#Root',()=>{
        it('Should return hello world response',(done)=>{
            request(app)
            .get('/')
            .expect('Hello World')
            .end(done);
        });
    });

    describe('#Get Users',()=>{
        it('Should have user in the array',(done)=>{
            request(app)
            .get('/users')
            .expect((res) =>{
                expect(res.body).toInclude({name:'Phani',age:29});
            })
            .end(done);
        });
    });

});