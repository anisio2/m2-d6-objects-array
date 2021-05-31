// Crie um objeto que receba ao menos três propriedades sobre você.
let stormtrooper = {
    nome: 'Anisio',
    batalhas: 'Guerra Civil Galáctica'
    centro_comando: 'Estrela da Morte',
    estrutura: 'Primeira Ordem',
    planeta: 'Império Galático',
}

// Adicione uma nova propriedade sem alterar seu objeto inicial.
let stormtrooper = {
    nome: 'Anisio',
    batalhas: 'Guerra Civil Galáctica'
    centro_comando: 'Estrela da Morte',
    estrutura: 'Primeira Ordem',
}
console.log(stormtrooper)
stormtrooper.planeta = 'Império Galático'

// Remova uma propriedade desse objeto.
let stormtrooper = {
    nome: 'Anisio',
    batalhas: 'Guerra Civil Galáctica'
    centro_comando: 'Estrela da Morte',
    estrutura: 'Primeira Ordem',
}
console.log(stormtrooper)
delete stormtrooper.centro_comando

//Mostre no console todas as propriedades desse objeto.
let stormtrooper = {
    nome: 'Anisio',
    batalhas: 'Guerra Civil Galáctica'
    centro_comando: 'Estrela da Morte',
    estrutura: 'Primeira Ordem',
}
console.log(stormtrooper)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
// Mostre no console o nome de um amigo de cada lista.
let cadastro = [{
    nome:'Darth Vader',
    idade: 30,
    telefone:'9999-1234',
    amigos:['Darth Sidious', 'Darth Sion', 'Larad Noon', 'Bastila Shan' , 'Darth Traya']
},
{
    nome:'C-3PO',
    idade: 300,
    telefone:'9999-3030',
    amigos:['R2-D2', 'Padmé Amidala', 'Han Solo' , 'Anakin Skywalker']
},
{
    nome:'Han Solo',
    idade: 40,
    telefone:'9999-4321',
    amigos:['Chewbacca', 'Mestre Yoda' , 'Ben Solo' , 'Princesa Leia']
},
{
    nome:'R2-D2',
    idade: 300,
    telefone:'9999-9999',
    amigos:['C-3PO', 'Anakin Skywalker', 'Padmé Amidala' , 'Obi-Wan Kenobi']
},
{                
    nome:'Chewbacca',
    idade: 50,
    telefone:'9999-3131',
    amigos:['Conde Dookan', 'Han Solo', 'Anakin Skywalker' , 'C-3PO']
}]

console.log(cadastro)
console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[1])
console.log(cadastro[2].amigos[2])
console.log(cadastro[3].amigos[3])
console.log(cadastro[4].amigos[0])