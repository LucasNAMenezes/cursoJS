function result(){
    let num = document.getElementById('num')
    let res = document.querySelector('select#selTab')
    let error = document.getElementById('err')

    if (num.value.length == 0){
        window.alert('[ERRO] Insira um numero!')
        error.style.border = '2px solid red'
        error.style.color = 'red'

        res.style.color = 'red'
        res.style.border = '2px solid red'
        
        num.style.border = '2px solid red'
    }else{
        let numero = Number(num.value)
        res.innerHTML = ''

        error.style.border = '1px solid black'
        error.style.color = 'black'

        res.style.border = '1px solid black'
        res.style.color = 'black'

        num.style.border = '1px solid black'
        
        for(c=0 ;c <=10 ; c++){
            
            let item = document.createElement('option')
            item.text = `${numero} x ${c} = ${numero*c}`
            item.value = `res${c}`
            res.appendChild(item)
        }
    }
}