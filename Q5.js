function validateEmail(email) {
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (pattern.test(email)) {
        console.log("Valid Email");
    } else {
        console.log("Invalid Email");
    }
}
validateEmail("example@gmail.com");   // Valid
validateEmail("test@domain");         // Invalid
validateEmail("user123@yahoo.com");   // Valid
validateEmail("wrong@email@com");     // Invalid
