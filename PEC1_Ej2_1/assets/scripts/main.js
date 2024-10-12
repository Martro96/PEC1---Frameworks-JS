/*Código validación formulario */
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Limpia los mensajes de error previos, es una buena práctica limpiar los datos antes de validar.
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(msg => msg.textContent = "");
    
    // Inicializa la validez del formulario
    let isValid = true;

    // Validar Username
    const username = document.getElementById("username");
    if (username.value.length < 3) {
        username.classList.add("error");
        document.getElementById("usernameError").textContent = "Username debe contener al menos 3 caracteres";
        isValid = false;
    } else {
        username.classList.remove("error");
    }

    // Validar Email
    const email = document.getElementById("email");
    if (email.value.trim() === "") {
        email.classList.add("error");
        document.getElementById("emailError").textContent = "El email no está validado";
        isValid = false;
    } else {
        email.classList.remove("error");
    }

    //Validamos edad
    const age = document.getElementById("age");
    if (age.value.trim() === "" || age.value < 0 || age.value >= 1000) {
        age.classList.add("error");
        document.getElementById("ageError").textContent = "La edad debe ser mayor a 0 e inferior a 1000.";
        isValid = false;
    } else {
        age.classList.remove("error");
    }

    // Validar Password con las peticiones del enunciado
    const password = document.getElementById("password");
    const passwordExpresionReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@$%^&*()_+={}|[\]\\:";'<>?,./]).{8,}$/;
    if (!passwordExpresionReg.test(password.value)) {
        password.classList.add("error");
        document.getElementById("passwordError").textContent = "La contraseña debe tener al menos 8 caracteres y contener mayúsculas, minúsculas, cifras y signos permitidos.";
        isValid = false;
    } else {
        password.classList.remove("error");
    }
    // Validar Confirm Password
    const confirmPassword = document.getElementById("confirm-password");
    if (confirmPassword.value.length === 0) {
        confirmPassword.classList.add("error");
        document.getElementById("confirmPasswordError").textContent = "La confirmación de la contraseña es obligatoria";
        isValid = false;
    } else if (confirmPassword.value !== password.value) {
        confirmPassword.classList.add("error");
        document.getElementById("confirmPasswordError").textContent = "Las contraseñas no coinciden";
        isValid = false;
    } else {
        confirmPassword.classList.remove("error");
    }

    // Si el formulario es válido, puedes enviarlo
    if (isValid) {
        alert("Formulario enviado correctamente!");
    }
});
