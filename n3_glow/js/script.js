// ===============================
// MENU HAMBÚRGUER
// ===============================

const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector(".nav-links");

hamburguer.addEventListener("click", () => {

    menu.classList.toggle("active");

});

// Fecha o menu ao clicar em um link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});

// ===============================
// BOTÃO VOLTAR AO TOPO
// ===============================

const btnTopo = document.getElementById("topo");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        btnTopo.style.display = "block";

    }else{

        btnTopo.style.display = "none";

    }

});

btnTopo.addEventListener("click", ()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

// ===============================
// ANIMAÇÃO DOS CARDS
// ===============================

const elementos = document.querySelectorAll(

".card, .passo, .profissional, .cards-depoimentos article"

);

function aparecer(){

    elementos.forEach(item=>{

        const posicao = item.getBoundingClientRect().top;

        const altura = window.innerHeight - 120;

        if(posicao < altura){

            item.style.opacity = "1";

            item.style.transform = "translateY(0px)";

        }

    });

}

elementos.forEach(item=>{

    item.style.opacity = "0";

    item.style.transform = "translateY(60px)";

    item.style.transition = ".8s";

});

window.addEventListener("scroll", aparecer);

aparecer();

// ===============================
// CONTADOR DAS ESTATÍSTICAS
// ===============================

const numeros = document.querySelectorAll(".item h2");

let iniciou = false;

function animarNumeros(){

    if(iniciou) return;

    const secao = document.querySelector(".estatisticas");

    if(!secao) return;

    const topo = secao.getBoundingClientRect().top;

    if(topo < window.innerHeight-150){

        iniciou = true;

        numeros.forEach(numero=>{

            const texto = numero.innerText;

            const valor = parseInt(texto.replace(/\D/g,""));

            if(isNaN(valor)) return;

            let atual = 0;

            const incremento = Math.ceil(valor/80);

            const timer = setInterval(()=>{

                atual += incremento;

                if(atual >= valor){

                    atual = valor;

                    clearInterval(timer);

                }

                if(texto.includes("+")){

                    numero.innerText = "+"+atual;

                }else{

                    numero.innerText = atual;

                }

            },20);

        });

    }

}

window.addEventListener("scroll",animarNumeros);

animarNumeros();

// ===============================
// HOVER SUAVE DOS CARDS
// ===============================

const cards = document.querySelectorAll(".card,.profissional");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.backgroundPosition = `${x}px ${y}px`;

    });

});

// ===============================
// ANIMAÇÃO DO HEADER
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.style.padding="0";

        header.style.boxShadow="0 5px 25px rgba(0,0,0,.15)";

    }else{

        header.style.boxShadow="0 2px 10px rgba(0,0,0,.05)";

    }

});

// ===============================
// EFEITO NOS BOTÕES
// ===============================

const botoes = document.querySelectorAll(".btn-principal,.btn-card");

botoes.forEach(botao=>{

    botao.addEventListener("mouseenter",()=>{

        botao.style.transform="scale(1.05)";

    });

    botao.addEventListener("mouseleave",()=>{

        botao.style.transform="scale(1)";

    });

});

// ===============================
// MENSAGEM DE BOAS-VINDAS
// ===============================

window.addEventListener("load",()=>{

    console.log("Glow Studio carregado com sucesso!");

});
const area=document.querySelector('#usuarioArea');const u=JSON.parse(localStorage.getItem('usuarioLogado'));if(area&&u){area.innerHTML=`Olá, ${u.nome} <button id="logoutBtn">Sair</button>`;document.getElementById('logoutBtn').onclick=()=>{localStorage.removeItem('usuarioLogado');location.reload();};}

// ================================
// VERIFICA SE HÁ UM USUÁRIO LOGADO
// ================================

document.addEventListener("DOMContentLoaded", () => {

    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

    const areaUsuario = document.getElementById("usuarioArea");

    if (!areaUsuario) return;

    if (usuario) {

        areaUsuario.innerHTML = `
            <span class="usuario-logado">
                Olá, <strong>${usuario.nome}</strong>
            </span>

            <button id="btnLogout" class="login-btn">
                Sair
            </button>
        `;

        document.getElementById("btnLogout").addEventListener("click", () => {

            localStorage.removeItem("usuarioLogado");

            window.location.href = "login.html";

        });

    } else {

        areaUsuario.innerHTML = `
            <a href="login.html" class="login-btn">
                Entrar
            </a>
        `;

    }

});