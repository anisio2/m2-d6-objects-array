// 1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18

// 2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true

// 3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro

// *** Exercícios bônus
// 4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R

// 5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E

let idade = 20
let humano = "true"
if (idade > 18){
    console.log("Você é maior de idade")
    console.log( "Vc é humano", humano)
} else{
    console.log("Rala daqui menor de idade")
}

let mes = 12 //true
if ((mes === 12) || (mes === 01)){
    console.log("Você FAZ aniversário em Dezembro ou Janeiro")
} else{
    console.log("Você não faz aniversário nesses meses")
}

let nome = "Anisio"
if(nome.substring(0,1) === "R"){
    console.log("Seu nome começa com R, parabéns!")
} else{
    console.log("Seu nome NÃO começa com R, seu nome é", nome)
}

let lastName  = "Borba"
if ((lastName.length > 6) || (lastName.substring(0,1) === "E")){
    console.log("Seu nome tem mais de 6 letras")
} else{
    console.log("Seu nome NÃO tem mais de 6 letras")
}
