class Employee {
    constructor(empId, empName, salary) {
        this.empId = empId;
        this.empName = empName;
        this.salary = salary;
    }
    displayEmployee() {
        console.log("Employee ID: " + this.empId);
        console.log("Employee Name: " + this.empName);
        console.log("Salary: " + this.salary);
    }
}
class Manager extends Employee {
    constructor(empId, empName, salary, department) {
        super(empId, empName, salary); // call parent constructor
        this.department = department;
    }
    displayManager() {
        console.log("Department: " + this.department);
    }
}
let manager1 = new Manager(201, "Rahul Sharma", 50000, "IT");
manager1.displayEmployee();
manager1.displayManager();
