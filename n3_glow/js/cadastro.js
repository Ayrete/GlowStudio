const form = document.querySelector("#formCadastro");

const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");
const senha = document.querySelector("#senha");
const confirmar = document.querySelector("#confirmar");

const erroNome = document.querySelector("#erroNome");
const erroEmail = document.querySelector("#erroEmail");
const erroTelefone = document.querySelector("#erroTelefone");
const erroSenha = document.querySelector("#erroSenha");
const erroConfirmar = document.querySelector("#erroConfirmar");

const cadastroSucesso = document.querySelector("#cadastroSucesso");
const barra = document.querySelector("#forca");

// =========================
// FORÇA DA SENHA
// =========================

senha.addEventListener("input", () => {

    const tamanho = senha.value.length;

    if (tamanho === 0) {

        barra.style.width = "0%";

    } else if (tamanho < 6) {

        barra.style.width = "30%";
        barra.style.background = "#ff3b30";

    } else if (tamanho < 10) {

        barra.style.width = "70%";
        barra.style.background = "#ff9500";

    } else {

        barra.style.width = "100%";
        barra.style.background = "#34c759";

    }

});

// =========================
// CADASTRO
// =========================

form.addEventListener("submit", (e) => {

    e.preventDefault();

    erroNome.innerHTML = "";
    erroEmail.innerHTML = "";
    erroTelefone.innerHTML = "";
    erroSenha.innerHTML = "";
    erroConfirmar.innerHTML = "";

    let valido = true;

    const nomeValor = nome.value.trim();
    const emailValor = email.value.trim().toLowerCase();
    const telefoneValor = telefone.value.trim();
    const senhaValor = senha.value;
    const confirmarValor = confirmar.value;

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nomeValor.length < 3) {

        erroNome.innerHTML = "Informe um nome válido.";
        valido = false;

    }

    if (!regexEmail.test(emailValor)) {

        erroEmail.innerHTML = "Digite um e-mail válido.";
        valido = false;

    }

    if (telefoneValor.length < 10) {

        erroTelefone.innerHTML = "Telefone inválido.";
        valido = false;

    }

    if (senhaValor.length < 6) {

        erroSenha.innerHTML = "A senha deve possuir pelo menos 6 caracteres.";
        valido = false;

    }

    if (senhaValor !== confirmarValor) {

        erroConfirmar.innerHTML = "As senhas não coincidem.";
        valido = false;

    }

    if (!valido) return;

    // =========================
    // VERIFICA SE O E-MAIL JÁ EXISTE
    // =========================

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const existe = usuarios.find(usuario => usuario.email === emailValor);

    if (existe) {

        erroEmail.innerHTML = "Este e-mail já está cadastrado.";
        return;

    }

    // =========================
    // SALVA O USUÁRIO
    // =========================

    usuarios.push({

        nome: nomeValor,
        email: emailValor,
        telefone: telefoneValor,
        senha: senhaValor

    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    cadastroSucesso.style.display = "block";

    form.reset();

    barra.style.width = "0%";

    setTimeout(() => {

        window.location.href = "login.html";

    }, 1800);

});