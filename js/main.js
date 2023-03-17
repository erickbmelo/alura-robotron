const robotron = document.querySelector("#robotron");

robotron.addEventListener("click", function(){
    console.log("Cliquei no botão");
});

function dizOi(nome){
    console.log("oi " + nome);
    console.log("bem vindo");
}

dizOi("Pedro");