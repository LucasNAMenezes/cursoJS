let txtNum1 = document.getElementById('txtN1')
let anal = document.getElementById('analisNum')
let finali = document.getElementById('fin')
let valores = []

function isNumero(n){
    if(Number(n) > 0 && Number(n) < 101){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}

function adicionar(){
    if (isNumero(txtNum1.value) && !inLista(txtNum1.value, valores)){
        valores.push(Number(txtNum1.value))
        let item = document.createElement('option')
        item.text = `Valor ${txtNum1.value} adicionado`
        anal.appendChild(item)
        finali.innerHTML = ''
    }else{
        alert('Valor invalidado ou ja encontrado na lista!')
    }
    txtNum1.value = ''
    txtNum1.focus()
}


function finalizar(){
    if(valores.length == 0){
        alert('Adicione um numero primeiro.')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / total
        
        finali.innerHTML = ''
        valores.sort()
        finali.innerHTML += `Ao todo, temos ${total} números cadastrados.
        <p>O maior valor informado foi ${maior}.</p>
        <p>O menor valor informado foi ${menor}.</p>
        <p>Somando todos os valores temos ${soma}.</p>
        <p>A media dos valores digitados é ${media}.</p>`
    }
}

/*
function adicionar(){

    if (txtNum1.value.length == 0 || num1 > 100 || num1 < 1){
        alert('Digite um numero valido!')
    }else{
    )
    }
}
function finalizar(){
let txtNum1 = document.getElementById('txtN1')
let num1 = Number(txtNum1.value)
let arrNum = []

*/




