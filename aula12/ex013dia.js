var agr = new Date()
var diaSem = agr.getDay()
switch(diaSem) {
    case 0:
        console.log('Hoje é domingo')
        break
    case 1:
        console.log('Hoje é segunda')
        break 
    case 2:
        console.log('Hoje é terça')
        break 
    case 3:
        console.log('Hoje é quarta')
        break 
    case 4:
        console.log('Hoje é quinta')
        break 
    case 5:
        console.log('Hoje é sexta')
        break 
    case 6:
        console.log('Hoje é sabado')
        break 
    default:
        console.log('[ERRO] Dia invalido!')
}

/*if(diaSem == 0){
    console.log('Domingo')
}else if(diaSem == 1){
    console.log('Segunda')
}else if(diaSem == 2){
    console.log('Terça')
}else if(diaSem == 3){
    console.log('Quarta')
}else if(diaSem == 4){
    console.log('Quinta')
}else if(diaSem == 5){
    console.log('Sexta')
}else if(diaSem == 6){
    console.log('Sabado')
}*/
