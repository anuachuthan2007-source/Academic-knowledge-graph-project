const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const message = document.getElementById("message");

        if (email === "student@gmail.com" && password === "123456") {

            message.textContent = "Login successful!";
            message.style.color = "green";

            setTimeout(function() {
                window.location.href = "dashboard.html";
            }, 1000);

        } else {

            message.textContent = "Invalid email or password!";
            message.style.color = "red";

        }
    });
}


function logout() {
    window.location.href = "index.html";
}