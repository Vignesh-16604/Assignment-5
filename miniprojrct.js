document.getElementById("regForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let message = document.getElementById("message");
    message.innerHTML = "";
    message.className = "";
    try {
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        if (name === "" || email === "" || password === "") {
            throw "All fields are required!";
        }
        if (name.length < 3) {
            throw "Name must be at least 3 characters!";
        }
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            throw "Invalid email format!";
        }
        let passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/;
        if (!password.match(passwordPattern)) {
            throw "Password must contain 6+ chars, 1 number & 1 special char!";
        }
        message.innerHTML = "Registration Successful!";
        message.className = "success";

    } catch (error) {
        message.innerHTML = error;
        message.className = "error";
    }
});
