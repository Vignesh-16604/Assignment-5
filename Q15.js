function calculator(a, b, operation) {
    try {
        if (isNaN(a) || isNaN(b)) {
            throw new Error("Invalid input: Please enter numbers only");
        }
        let result;
        if (operation === "add") {
            result = a + b;
        } 
        else if (operation === "divide") {
            if (b === 0) {
                throw new Error("Cannot divide by zero");
            }
            result = a / b;
        } 
        else {
            throw new Error("Invalid operation");
        }
        console.log("Result: " + result);
    } catch (error) {
        console.log("Error: " + error.message);
    }
}
calculator(10, 5, "add");    
calculator(10, 0, "divide"); 
calculator("a", 5, "add");   
calculator(10, 2, "multiply");
