document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form submit default

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("pass").value;
    const age = parseInt(document.getElementById("age").value);
    const country = document.getElementById("country").value;

    if (!name || !email || !pass || isNaN(age) || !country) {
        alert("Please fill out all fields.");
        return;
    }

    const atIndex = email.indexOf("@");
    const dotIndex = email.lastIndexOf(".");

    if (
        atIndex <= 0 ||
        dotIndex <= atIndex + 1 ||
        dotIndex === email.length - 1
    ) {
        alert("Please enter a valid email address.");
        return;
    }

    if (age < 1 || age > 120) {
        alert("Please enter a valid age between 1 and 120.");
        return;
    }

    alert("Registration successful!");
});
