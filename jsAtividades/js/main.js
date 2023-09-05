// classe é um molde

class Pessoa {

    // variaveis ou caracteristicas do objeto = atributs
   _nome
   _idade
   _peso 
   _altura 
   _imc

   // métodos = funçoes = comportamentos
   constructor (nome,idade,peso,altura){
    this._nome = nome
    this._idade = idade
    this._peso = peso
    this._altura = altura
    this._imc = this._peso / (this._altura * this._altura)

   }

   calculaImc(){
    return (this._peso / (this._altura * this._altura)).toFixed(2)
   }

   //get = pegar info
   get nome(){
    return this._nome

   }
   get imc(){
    return this._imc

   }

   get idade(){
    return this._idade

   }
   get peso(){
    return this._peso

   }
   get altura(){
    return this._altura

   }
   //set = alterar

   set nome(novoNome){
    this._nome = novoNome
   }

   set idade(novaIdade){
    this._idade = novaIdade
   }
   set peso(novoPeso){
    this._peso = novoPeso
   }

   set altura(novaAltura){
    this._altura = novaAltura
   }


}

// cria uma 'pessoa'

let pessoa1 = new Pessoa('Maria', 20, 56.6, 1.6)
let pessoa2 = new Pessoa('Edson', 70, 60.9, 1.7)
let pessoa3 = new Pessoa('Ana', 20, 42.3, 1.41)
let pessoa4 = new Pessoa('Bia', 50, 98.7, 1.52)


console.log("Nome" + pessoa1.nome)
console.log("Idade" + pessoa1.idade)
console.log("IMC" + pessoa1.imc)
//pessoa1._nome = "Maria"
//pessoa1._altura = 40
//pessoa1._idade = 80
//pessoa1._peso = 90

console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)
console.log(pessoa4)

console.log(pessoa1.calculaImc())
console.log(pessoa2.calculaImc())
console.log(pessoa3.calculaImc())
console.log(pessoa4.calculaImc())