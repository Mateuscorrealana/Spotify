// Código para alternar entre as telas de login e cadastro
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Eventos para alternar entre login e cadastro
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Função de callback chamada após o login com o Google
function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    alert("Login com Google bem-sucedido!");
}

// Inicialização do Google Login
window.onload = function () {
    // Inicializa a API de login do Google com seu client_id
    google.accounts.id.initialize({
        client_id: "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", // Seu Client ID do Google
        callback: handleCredentialResponse, // Função de callback após o login
    });

    // Obtém o botão de login do Google (já existente no HTML)
    const googleLoginBtn = document.getElementById('google-login-btn');
    
    // Verifica se o botão existe antes de adicionar o evento
    if (googleLoginBtn) {
        // Adiciona evento de clique no botão do Google para iniciar o login
        googleLoginBtn.addEventListener('click', function () {
            // Inicia o processo de login do Google
            google.accounts.id.prompt(); // Exibe o prompt de login do Google
        });
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".sign-in form"); 

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const emailInput = loginForm.querySelector("input[type='email']");
        const passwordInput = loginForm.querySelector("input[type='password']");

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        
        if (email === "admin@email.com" && password === "1234") {
            localStorage.setItem("loggedIn", "true"); 
            window.location.href = "index.html"; 
        } else {
            alert("Email ou senha incorretos!");
        }
    });


    if (window.location.pathname.includes("index.html") && localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html"; 
    }
});
