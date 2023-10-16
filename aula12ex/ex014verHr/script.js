function car(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('img')

    let data = new Date()
    let hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
    
    if (hora > 5 && hora <= 12){
        document.body.style.background = 'rgb(255, 218, 155)'
        img.src = "manhã.png"
    }else if(hora >= 18 || hora <= 5){
        document.body.style.background = 'rgb(8, 0, 72)'
        img.src = 'noite.png'
    }else{
        document.body.style.background = 'rgb(255, 147, 85)'
        img.src = 'tarde.png'
    }
}