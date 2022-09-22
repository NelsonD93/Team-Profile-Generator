const Manager = require('../Lib/manager.js')

test('Testing Manager', ()=> {
    const manager = new Manager('Nelson', 22, 'Nelson93', 12);
    
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
})