function resultado(){
    let numTxt = document.querySelector('input#txtNum')
    let tab = document.querySelector('select#seltab')
    if (numTxt.value.length == 0){
          window.alert('Digite um numero')
    } else{
       let numero = Number(numTxt.value)
       tab.innerHTML = ''
     for (var n = 1; n <= 10; n++){
        let item = document.createElement('option')
        item.text = `${numero} x ${n} = ${numero*n}`
        item.value = `tab${n}`
        tab.appendChild(item)
    } 
    }
  
}