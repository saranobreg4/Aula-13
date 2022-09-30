var altura = prompt("Digite a altura: ")
var peso = prompt("Digite seu peso")
var valor = (peso / (altura * altura))
var m = Math.round(valor)
alert(m)
if(m < 16)
{
    var i ='Baixo peso muito grave'
}else if (m > 16 && m < 17)
{
    var i ='Baixo peso grave'
}else if(m > 17 && m < 19)
{
    var i = 'Baixo peso'
}else if(m > 19 && m < 25)
{
    var i = 'Peso normal'
}else if (m > 25 && m < 30)
{
    var i = 'Sobre peso'
}else if(m > 30 && m < 35)
{
    var i ='Obesidade de primeiro grau'
}else if(m > 35 && m < 40)
{
    var i = 'Obesidade de segundo grau'
}else if(m > 40)
{
    var i = 'Obesidade de terceiro grau'
}
alert(m)
alert(i)
document.write("Meu IMC é: "+m+" seu índice de m. corporal é"+i )
