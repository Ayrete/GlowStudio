const form = document.querySelector("#formLogin");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const email = document.querySelector("#email").value.trim();
    const senha = document.querySelector("#senha").value;

    document.querySelector("#erroEmail").innerHTML = "";
    document.querySelector("#erroSenha").innerHTML = "";

    const usuarioSalvo = localStorage.getItem(email);

    if (!usuarioSalvo) {

        document.querySelector("#erroEmail").innerHTML =
            "Nenhuma conta encontrada com este e-mail.";

        return;
    }

    const usuario = JSON.parse(usuarioSalvo);

    if (usuario.senha !== senha) {

        document.querySelector("#erroSenha").innerHTML =
            "Senha incorreta.";

        return;
    }

    localStorage.setItem(
        "usuarioLogado",
        JSON.stringify(usuario)
    );

    document.querySelector("#loginSucesso").style.display = "block";

    setTimeout(() => {

        window.location.href = "index.html";

    }, 1500);

});