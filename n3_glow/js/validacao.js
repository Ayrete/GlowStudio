const form = document.querySelector("#formContato");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

let valido=true;

const nome=document.querySelector("#nome");

const email=document.querySelector("#email");

const telefone=document.querySelector("#telefone");

const mensagem=document.querySelector("#mensagem");

document.querySelectorAll("small").forEach(item=>item.innerHTML="");

const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(nome.value.trim().length<3){

document.querySelector("#erroNome").innerHTML="Informe seu nome.";

valido=false;

}

if(!regex.test(email.value)){

document.querySelector("#erroEmail").innerHTML="E-mail inválido.";

valido=false;

}

if(telefone.value.trim().length<10){

document.querySelector("#erroTelefone").innerHTML="Telefone inválido.";

valido=false;

}

if(mensagem.value.trim().length<10){

document.querySelector("#erroMensagem").innerHTML="Digite uma mensagem.";

valido=false;

}

if(valido){

document.querySelector("#sucesso").style.display="block";

form.reset();

setTimeout(()=>{

document.querySelector("#sucesso").style.display="none";

},4000);

}

});

}