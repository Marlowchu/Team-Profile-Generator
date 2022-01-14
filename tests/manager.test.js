const Manager = require("../lib/manager");



test ("Testing set office number", () => {
    const test = 123;
    const manager = new Manager("name",1,"email",test);
    expect(manager.officeNumber).toBe(test);

})

test ("Testing getRole funtion", () => {
    const test = "Manager";
    const manager = new Manager("name",1,"email",1);
    expect(manager.getRole()).toBe(test);

})