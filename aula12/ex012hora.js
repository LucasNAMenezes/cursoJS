var agr = new Date()
var hora = agr.getHours()
var min = agr.getMinutes()

console.log(`Agora são extamente ${hora} horas e ${min}.`)

if(hora < 12){
    console.log('Bom dia!')
}else if(hora > 17){
    console.log('Boa noite!')
}else{
    console.log('Boa tarde!')
}