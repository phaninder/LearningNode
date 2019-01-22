const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./App');

describe('App',()=>{
    var db = {
        saveUser:expect.createSpy()
    };
    app.__set__('db',db);

    it('Should call saveUser with user object',()=>{
        var email ='some@email.com';
        var password = '123a';
        app.handleSignup(email,password);
        expect(db.saveUser).toHaveBeenCalledWith({email,password});
    });

    it('Should call the spy correctly',()=>{
        var spy = expect.createSpy();
        spy();
        expect(spy).toHaveBeenCalled();
    });
}); 