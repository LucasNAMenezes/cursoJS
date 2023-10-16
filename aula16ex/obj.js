let amigo = {
    nome:'José',
    sexo:'M',
    peso:85.4,
    engordar(p=0){
        for(let pizza = 8; pizza > 0; pizza--){
            console.log('pedaço ' + pizza)
            this.peso += p
        }
    }
}

amigo.engordar(0.2)

console.log(amigo.peso.toFixed(2))