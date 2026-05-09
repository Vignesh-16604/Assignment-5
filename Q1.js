class Student {
    constructor(name, rollNo, marks) {
        this.name = name;
        this.rollNo = rollNo;
        this.marks = marks;
    }
    displayDetails() {
        console.log("Name: " + this.name);
        console.log("Roll No: " + this.rollNo);
        console.log("Marks: " + this.marks);
    }
    checkResult() {
        if (this.marks >= 40) {
            console.log("Result: Pass");
        } else {
            console.log("Result: Fail");
        }
    }
}
let student1 = new Student("Deepak Kumar", 101, 78);
student1.displayDetails();
student1.checkResult();
