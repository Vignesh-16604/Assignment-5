let password = "Abc@1234";
let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
if (pattern.test(password)) {
    console.log("Valid Password");
} else {
    console.log("Invalid Password");
}
