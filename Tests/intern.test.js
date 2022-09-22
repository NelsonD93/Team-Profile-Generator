const Intern = require('../Lib/intern.js')

test('Testing Intern', ()=> {
    const intern = new Intern('Nelson', 22, 'UConn', 'nelsondrozd@gmail.com');
    
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})