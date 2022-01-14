const Engineer = require("../lib/engineer");


test ("Testing set gitHub", () => {
    const test = "gitHub";
    const engineer = new Engineer("name",1,"email",test);
    expect(engineer.github).toBe(test);

})

test ("Testing getRole funtion", () => {
    const test = "Engineer";
    const engineer = new Engineer("name",1,"email", "gitHub");
    expect(engineer.getRole()).toBe(test);

})