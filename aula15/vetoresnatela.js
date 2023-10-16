let valores = [1, 4 ,6 ,34 ,45 ,654]

console.log(valores)

for(let pos in valores){
    console.log(`Posição ${pos} = ${valores[pos]}`)
}

/*for(let pos = 0; pos < valores.length; pos++){
    console.log(`Posição ${pos} = ${valores[pos]}`)
}*/

console.log(valores.indexOf(34))//posiçao 3

console.log(valores.indexOf(2))//não existe, retorna -1




