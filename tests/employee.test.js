const Employee = require(`../lib/employee`)

test ("Testing set name", () => {
    const test = "chuck";
    const employee = new Employee(test);
    expect(employee.name).toBe(test);

})

test ("Testing set id", () => {
    const test = "12345";
    const employee = new Employee("name",test);
    expect(employee.id).toBe(test);

})

test ("Testing set email", () => {
    const test = "email";
    const employee = new Employee("test",1,test);
    expect(employee.email).toBe(test);

})

test ("Testing getRole funtion", () => {
    const test = "Employee";
    const employee = new Employee("name",1,"email");
    expect(employee.getRole()).toBe(test);

})

