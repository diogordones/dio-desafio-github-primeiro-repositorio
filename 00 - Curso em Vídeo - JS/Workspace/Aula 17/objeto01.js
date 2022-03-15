let amigo = {nome:'Faraó', 
sexo:'M', 
peso:90.5, 
engordar(p=0){
    this.peso += p
}}

amigo.engordar(2)

console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)