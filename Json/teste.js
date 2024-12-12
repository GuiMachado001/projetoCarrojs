// var x = 20;
// var y = 10;

// var res = x > 50 ? "Verdadeiro" : "<h1 class='danger'> Falso </h1>";


// var n1 = parseFloat(prompt("Digite o numero: "))
// var n2 = parseFloat(prompt("Digite outro numero: "))

// var z = n1 > n2 ? alert("n1 é maior que n2") : console.log("n2 é maior que n1")

// ---------------------------------------------------------
// 
// var lista = [33, 44, 55, 67, 68, 90, 111]
// 
// console.log(lista.length)
// 
// if (lista.length < 10 ){
    // alert("Lista Pequena") 
// }else{
    // alert("Lista Grande")
// }
// 
// for(var i = 0; i < lista.length; i++){
    // console.log(lista[i])
// }



// var pessoa = {
//     "nome": "Guilherme",
//     "sobrenome": "Machado",
//     "idade": 22,
//     "fone": null,
//     "email": "guilherme@gmail.com",
//     "addFone": function(v){
//         this.fone = v;
//         console.log("Telefone Adicionado com sucesso" + this.fone)
//     },
//     "getDados": function(){
//         return this.nome + this.sobrenome + " tem " + this.idade + " contato: " + this.email
//     }
// }

// var res = pessoa.getDados("Anime")
// console.log(res)
// console.log(pessoa.nome, pessoa.idade)


var carro = {
    "marca": "Toyota",
    "modelo": "Supra",
    "placa": "BRA2E24",
    "ano": 1994,
    "cor": "cinza",
    "porta": 2,
    "tanque": 5,
    "ligado": false,
    "desligado": true,
}

function ligar(){
    document.getElementById("roda1").classList.add("anima");
    document.getElementById("roda2").classList.add("anima");

    document.getElementById("carro").classList.add("animaCarro")

    document.getElementById("ligarCarro").classList.remove("off")
    document.getElementById("ligarCarro").classList.add("on")

    document.getElementById("desligarCarro").classList.add("off")

    if(carro.tanque <= 1){
        alert("Para ligar abasteça o carro !!")

        document.getElementById("roda1").classList.remove("anima");
        document.getElementById("roda2").classList.remove("anima");
        document.getElementById("carro").classList.remove("animaCarro")
    }else{
        if(carro.ligado == true){
            alert("O carro ja esta ligado!")
        }else{
            document.getElementById("roda1").classList.add("anima");
            document.getElementById("roda2").classList.add("anima");
        
            document.getElementById("carro").classList.add("animaCarro")
        
            document.getElementById("ligarCarro").classList.remove("off")
            document.getElementById("ligarCarro").classList.add("on")
        
            document.getElementById("desligarCarro").classList.add("off")

            carro.ligado = true
            carro.desligado = false
            carro.tanque -= 1

            if(carro.tanque <=0){
                alert("Precisa Abastecer")
            }
        }
    }
}
function desligar(){
    if(carro.desligado == true){
        alert("O carro ja esta desligado")
    }else{
        document.getElementById("roda1").classList.remove("anima");
        document.getElementById("roda2").classList.remove("anima");
        document.getElementById("carro").classList.remove("animaCarro")
    
        document.getElementById("desligarCarro").classList.remove("off")
        document.getElementById("desligarCarro").classList.add("on")
    
        document.getElementById("ligarCarro").classList.add("off")

        carro.ligado = false
        carro.desligado = true
    }
}

function abastecer(){
    var valor = parseFloat(prompt("Digite os litros a colocar"))

    carro.tanque += valor;
}

function nivel(){
    let my_span = document.getElementById("nivel");

    my_span.innerText = carro.tanque;
}

