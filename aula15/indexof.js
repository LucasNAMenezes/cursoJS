let num = [12, 42, 532, 3, 2, 21]

let sic = num.indexOf(41)


if (sic == -1){
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O valor está na posição ${sic}!`)
}