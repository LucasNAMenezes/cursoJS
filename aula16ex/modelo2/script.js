let num = document.getElementById('txtN')
let lis = document.getElementById('selVal')
let res = document.getElementById('fin')
let arr = []

function isNumero(n){
    if(Number(n) > 0 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inList(num.value, arr) && num.value.length !== 0 ){
        arr.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado!`
        lis.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor invalido ou ja adicionado na lista!')
    }
    num.value = ''
    num.focus()
}

function analisar(){
    if(arr.length == 0){
        window.alert('Adicione algum valor!')
    }else{

        let maior = arr[0]
        let menor = arr[0]
        let soma = 0
        let media = 0
        for(let pos in arr){
            soma += arr[pos]
            
            if(arr[pos] > maior){
                maior = arr[pos]
            }
            if(arr[pos] < menor){
                menor = arr[pos]
            }
        }
        media = soma / arr.length
        res.innerHTML = `Ao todo, temos ${arr.length} valores.<br>
        O maior valor é ${maior}.<br>
        O menor valor é ${menor}.<br>
        Somando todos os valores temos ${soma}.<br>
        A media dos valores informados é de ${media.toFixed(2)}.`
    }
}