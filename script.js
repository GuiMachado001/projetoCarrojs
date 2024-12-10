// DECLARAÇÃO DE VARIAVEIS: var, let, const
// var deixa sobrescrever a variavel
// let nao deixa vc criar outr variavel com mesmo nome
// const nao deixa alterar o valor da variavel

// var n1 = parseFloat( prompt("Digite n1: "))
// var n2 = parseFloat(prompt("Digite n2: "))

// var res = n1 + n2;0

// console.log("Resultado = "+res)


// JS é uma linguagem funcional, é baseada em funções


function func1(){
    let minhaDiv = document.getElementById("header");

    minhaDiv.style.backgroundColor = '#fff'
}

function func2(){

    let minhaDiv = document.getElementById("header");

    minhaDiv.style.backgroundColor = 'red'
}


function func3(){
    let my_span = document.getElementById("texto");
    let input_nome = document.getElementById("nome").value;

    my_span.innerText = input_nome;
}

function valida(event){
    event.preventDefault();

    const form = document.getElementById("formulario");

    let login = form.email.value;
    let senha = form.senha.value;
    let conf = form.confSenha.value;

    if(login.length < 5){
        alert("Digite um email válido");
        return false
    }

    if(senha != conf){
        alert("As senhas não batem");
        return false
    }else{
        alert("Cadastrado com sucesso");
        return true
    }
}

