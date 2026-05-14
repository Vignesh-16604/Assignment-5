const str = "Order123Amount450";
const numbers = str.match(/\d+/g);
console.log("Extracted Numbers:", numbers);
const str1 = "JavaScript Regular Expression";
const result = str1.replace(/\s+/g, "*");
console.log(result);
function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        let result = a / b;
        console.log("Result:", result);
    }
    catch (error) {
        console.log("Error:", error.message);
    }
    finally {
        console.log("Execution Completed");
    }
}
divideNumbers(20, 5);
divideNumbers(10, 0);
function calculator(d, c, operation) {
    try {
        if (isNaN(d) || isNaN(c)) {
            throw new Error("Invalid Input");
        }
        if (operation === "add") {
            let sum = d + c;
            console.log("Addition:", sum);
        }
        else if (operation === "divide") {
            if (c === 0) {
                throw new Error("Divide by Zero Error");
            }
            let division = d / c;
            console.log("Division:", division);
        }
        else {
            throw new Error("Invalid Operation");
        }
    }
    catch (error) {
        console.log("Error:", error.message);
    }
}
calculator(10, 5, "add");
calculator(20, 4, "divide");
calculator(10, 0, "divide");
calculator("abc", 5, "add");
calculator(10, 5, "multiply");
