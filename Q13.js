function validateUsername(username) {
    try {
        if (username.length < 5) {
            throw new Error("Invalid Username: Must be at least 5 characters");
        }
        console.log("Valid Username");
    } catch (error) {
        console.log("Error: " + error.message);
    }
}
validateUsername("Vignesh"); 
validateUsername("Raj");     
