function checkAge(age) {
    try {
        if (age < 18) {
            throw "Not Eligible";
        }
        console.log("Eligible to Vote");
    } catch (error) {
        console.log("Error: " + error);
    }
}
checkAge(20); 
checkAge(15); 
