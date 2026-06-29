const pesquisa = document.querySelector("#buscar");

const cards = document.querySelectorAll(".servico");

pesquisa.addEventListener("keyup",()=>{

const texto = pesquisa.value.toLowerCase();

cards.forEach(card=>{

const nome = card.innerText.toLowerCase();

card.style.display = nome.includes(texto) ? "block" : "none";

});

});

const botoes = document.querySelectorAll(".filtros button");

botoes.forEach(botao=>{

botao.addEventListener("click",()=>{

document.querySelector(".ativo").classList.remove("ativo");

botao.classList.add("ativo");

const categoria = botao.dataset.filter;

cards.forEach(card=>{

if(categoria=="todos"){

card.style.display="block";

}else{

card.style.display=

card.classList.contains(categoria)

?

"block"

:

"none";

}

});

});

});

const modal=document.querySelector(".modal");

document.querySelectorAll(".agendar").forEach(botao=>{

botao.onclick=()=>{

modal.style.display="flex";

}

});

document.querySelector("#fechar").onclick=()=>{

modal.style.display="none";

}

window.onclick=(e)=>{

if(e.target==modal){

modal.style.display="none";

}

}