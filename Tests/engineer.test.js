const Engineer = require('../Lib/engineer.js')

test('Testing engineer', ()=> {
    const engineer = new Engineer('Nelson', 22, 'Nelson93', 'nelsondrozd@gmail.com');
    
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})