// Função para adicionar a classe 'scrolled' ao header quando o usuário rola a página
window.onscroll = function() {
    var header = document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

    // Função para animação de fade-in nas seções
    fadeInSections();
};

// Função para adicionar a classe 'visible' às seções que estão visíveis
function fadeInSections() {
    var sections = document.querySelectorAll('.section');
    var windowHeight = window.innerHeight;

    sections.forEach(function(section) {
        var sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight * 0.75) { // Se a seção estiver 75% visível
            section.classList.add('visible');
        }
    });
}

// Inicializando a animação de fade-in ao carregar a página
window.onload = fadeInSections;

function openTrailer(videoUrl) {
    var modal = document.getElementById("trailerModal");
    var iframe = document.getElementById("trailerIframe");
    iframe.src = videoUrl; // Define o link do vídeo
    modal.style.display = "flex"; // Mostra o modal
}

function closeModal() {
    var modal = document.getElementById("trailerModal");
    var iframe = document.getElementById("trailerIframe");
    iframe.src = ""; // Limpa o vídeo quando o modal é fechado
    modal.style.display = "none"; // Fecha o modal
}

 // Função de validação do formulário
 function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    // Validando os campos
    if (name == "" || email == "" || message == "") {
        alert("Por favor, preencha todos os campos!");
        return false;
    }

    // Se estiver tudo certo, mostrar mensagem de sucesso
    document.getElementById("contactForm").reset(); // Limpa o formulário
    document.getElementById("successMessage").style.display = "block"; // Exibe a mensagem de sucesso
    return false; // Impede o envio real (para testes)
}

 // Obtendo o botão e a referência ao <body>
 const themeToggleButton = document.getElementById('theme-toggle');
 const body = document.body;

 // Verificando o tema armazenado no localStorage (se existir)
 if (localStorage.getItem('theme') === 'dark') {
     body.classList.add('dark-theme');
     themeToggleButton.textContent = '☀️';  // Ícone do sol para tema claro
 }

 // Função para alternar o tema
 themeToggleButton.addEventListener('click', () => {
     body.classList.toggle('dark-theme');

     // Alternando o ícone do botão e armazenando a escolha no localStorage
     if (body.classList.contains('dark-theme')) {
         themeToggleButton.textContent = '☀️';  // Tema claro
         localStorage.setItem('theme', 'dark');
     } else {
         themeToggleButton.textContent = '🌙';  // Tema escuro
         localStorage.setItem('theme', 'light');
     }
 });