const Intern = require("../lib/intern");


test ("Testing set school", () => {
    const test = "school";
    const intern = new Intern("name",1,"email",test);
    expect(intern.school).toBe(test);

})

test ("Testing getRole funtion", () => {
    const test = "Intern";
    const intern = new Intern("name",1,"email","school");
    expect(intern.getRole()).toBe(test);

})