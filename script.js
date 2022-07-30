let sliderElement = document.querySelector("#slider");
let sliderDificuldadeElement = document.querySelector("#sliderDificuldade")
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let sizeDificuldade = document.querySelector("#dificuldade")
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = ""
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;
slider.oninput = function(){
  sizePassword.innerHTML = this.value;
}
sizeDificuldade.innerHTML = sliderDificuldadeElement.value;
sliderDificuldade.oninput = function(){
  sizeDificuldade.innerHTML = this.value;
}



function generatePassword(){
  let pass = "";
  if(sliderDificuldadeElement.value == 1){
  charset = "abcdeifghijklmnopqrstuvxwyz"
  }
if(sliderDificuldadeElement.value == 2){
  charset = "abcdeifghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVXWYZ"
  }
if(sliderDificuldadeElement.value == 3){
  charset = "abcdeifghijkKLMNOPQRSTUVXWYZ0123456789"
  }
if(sliderDificuldadeElement.value == 4){
  charset = "abcdeifghijkLMNOPQRSTUVXWYZ0123456789!@#$%&*"
  }
if(sliderDificuldadeElement.value == 5){
  charset = "!@#$%&*?abcdeifghijKLMNOPQRSTUVXWYZ0123456789!@#$%&*?;:<>.,"
  }
  for(let i = 0, n = charset.length; i < sliderElement.value; i++){
    pass += charset.charAt(Math.floor(Math.random()*n));
  }
  
  containerPassword.classList.remove("hide")
  password.innerHTML = pass;
  novaSenha = pass;
}


function copyPassword(){
  alert("SENHA COPIADA COM SUCESSO!")
  navigator.clipboard.writeText(novaSenha);
}