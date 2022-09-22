const Employee = require('../Lib/employee.js')

test ('Testing Employee', ()=>{
    const employee = new Employee('Nelson', 22, 'nelsondrozd@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
})

