function ver(){
    let id = document.getElementById('nasc')
    
    let res = document.getElementById('res')
    
   

    let data = new Date()
    let ano = data.getFullYear()

    if(id.value.length < 4 || Number(id.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        let sex = document.getElementsByName('sex')
        let idade = ano - Number(id.value)
        let gen = ''

        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(sex[0].checked){
            gen = 'homem'
            if(idade < 15){
                //criança
                img.setAttribute('src', 'menino.png')
            }else if(idade < 25){
                //jovem
                img.setAttribute('src', 'homemjovem.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'homemadulto.png')
            }else if(idade < 105){
                //idoso
                img.setAttribute('src', 'homemidoso.png')
            }else{
                //defunto
                img.setAttribute('src', 'defunto.png')
            }
        }else{
            gen = 'mulher'
            if(idade < 15){
                //criança
                img.setAttribute('src', 'menina.png')
            }else if(idade < 25){
                //jovem
                img.setAttribute('src', 'mulherjovem.png')
            }else if(idade < 50){
                //adulta
                img.setAttribute('src', 'mulheradulta.png')
            }else if(idade < 105){
                //idosa
                img.setAttribute('src', 'mulheridosa.png')
            }else{
                //defunta
                img.setAttribute('src', 'defunto.png')
            }
        }
        
        res.innerHTML = `Detectamos ${gen} com ${idade} anos`

        res.appendChild(img)
    }
}


