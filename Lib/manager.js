const Employee = require('./employee.js')

class Manager extends Employee{
    constructor(name,id,email,officeNumber) {
    // this.name = name
    // this.id = id
    // this.email = email
    super(name,id,email)
    this.officeNumber = officeNumber
    }
    getRole() {
        return 'Manager'
    }
}

module.exports = Manager