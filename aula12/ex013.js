var agora = new Date()
var diaSem = agora.getDay()

/* No JavaScript, com a função getDay, ele irá ver os dias da semana, e contará a partir do primeiro dia da semana, começando no domingo, ele conta de 0 a 6, sendo:

0 = domingo
1 = segunda
2 = terça
3 = quarta
4 = quinta
5 = sexta
6 = sábado

Para mudar essa condição, basta utilizar a CONDIÇÂO MÚLTIPLA:
*/

console.log(diaSem)
switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break
}