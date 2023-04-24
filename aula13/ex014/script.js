function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'imagens/manha.png'
        window.document.body.style.background = '#b197e3'
    }else if (hora >= 12 && hora <= 18){
        img.src = 'imagens/tarde.png'
        window.document.body.style.background = '#966065'
    }else{
        img.src = 'imagens/noite.png'
        window.document.body.style.background = '#19193d'
    }
}