function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
            if (idade >= 0 && idade < 10){
                
            }else if (idade < 21){

            }else if (idade < 50){

            }else{

            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            res.innerHTML = `Detectamos uma ${genero} com ${idade} anos.`
            if (idade >= 0 && idade < 10){
                
            }else if (idade < 21){

            }else if (idade < 50){

            }else{
                
            }
        }
        res.style.textAlign = 'center'
    }
}