function calc(){
    let startTxt = document.querySelector('input#comTxt')
    let endTxt = document.getElementById('fimTxt')
    let stepTxt = document.getElementById('etaTxt')
    let res = document.querySelector('div#res')

    if(startTxt.value.length === 0 || endTxt.value.length === 0 || stepTxt.value.length === 0){

        res.innerHTML = 'Insira todos os dados!'

    }else{

        let start = Number(startTxt.value)
        let end = Number(endTxt.value)
        let step = Number(stepTxt.value)
        res.innerHTML = 'Contando: <br>'
        
        if(step <= 0){
            window.alert('Passo invalido! considerando PASSO 1')
            step = 1
        }

        if(start < end){//crescente
            for(let e = start; e <= end; e+=step){
                res.innerHTML += e + ' \u{21DB} '
            }
        }else{//regressiva
            for(let e = start; e >= end; e-=step){
                res.innerHTML += `${e} \u{21DB}`
            }
        }    
    }
    res.innerHTML += '\u{1F3C1}'
}