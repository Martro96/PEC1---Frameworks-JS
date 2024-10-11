/*Código validación formulario 
NO ME FUNCIONA EL QUE UNA VEZ LE DOY A ENVIAR ESTANDO EL FORM VACÍO, SE PONGAN LOS BORDES ROJOS CON LOS MENSAJES DE ERROR

ESTOS ME SALEN SI RELLENO EL FORMULARIO Y POR EJEMPLO, LAS CONTRASEÑAS LAS PONGO MAL, AHÍ SI ME SALE EN ROJO.
*/
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Limpia los mensajes de error previos
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
    if (!email.validity.valid) {
        email.classList.add("error");
        document.getElementById("emailError").textContent = "El email no está validado";
        isValid = false;
    } else {
        email.classList.remove("error");
    }

    //Validamos edad
    const age = document.getElementById("age");
    if (age.value < 0 || age.value >= 1000) {
        age.classList.add("error");
        document.getElementById("ageError").textContent = "La edad debe ser mayor a 0 e inferior a 1000.";
        isValid = false;
    } else {
        age.classList.remove("error");
    }

    // Validar Password con las peticiones del enunciado
    const password = document.getElementById("password");
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@$%^&*()_+={}|[\]\\:";'<>?,./]).{8,}$/;
    if (!passwordRegex.test(password.value)) {
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
