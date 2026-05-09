function validateMobile(number) {
    let pattern = /^[6-9]\d{9}$/;
    if (pattern.test(number)) {
        console.log("Valid Mobile Number");
    } else {
        console.log("Invalid Mobile Number");
    }
}
validateMobile("9876543210");
validateMobile("5678901234"); 
validateMobile("987654321");  
validateMobile("A876543210"); 
