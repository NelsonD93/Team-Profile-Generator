class Employee {
    constructor(name,id,email){
    this.name = name
    this.id = id
    this.email = email
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return "Employee"
    }
}

module.exports = Employee;

// const employee1 = new Employee("John", 1, "john@mail.com");
// const employee2 = new Employee("Peter", 2, "peter@mail.com");

// console.log(employee1.getRole())
// console.log(employee2.getName())