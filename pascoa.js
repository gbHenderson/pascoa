var nome = window.prompt('Qual é o seu nome?')
if (nome == 'Marcella' || nome == 'marcella'){
    var data = window.prompt('Se você é mesmo a marcella. Digite o dia do nosso namoro:')
    if (data == '26'){
        document.getElementsByTagName('h1')[0].innerText = `Feliz Páscoa pra você, ${nome}!`
        document.getElementsByTagName('p')[0].innerHTML = `Meu amor, tudo que eu tinha para falar e desabafar contigo eu já disse na cartinha, então aqui fica só umas considerações de eu te desejando uma feliz páscoa, ${nome}! Você sabe que eu te amo muito que sou muito feliz de ter sua presença quando você está do meu lado, que sou muito feliz de ter você como a minha namorada e que espero passar todas as páscoas da minha vida ao seu lado. Tenho uma gratidão enorme de poder ter achado alguém que faz eu me sentir 100% completado quando estou a seu lado, além de obviamente ser grato a pessoa que você e que me ajuda demais e me apoia. Vivemos momentos complicados ultimamente, porém eu tenho certeza que isso foi para nos fortalezer e fazer com que evoluamos! Hoje é dia de receber chocolate, mas o mais belo e melhor chocolate que eu já provei é a sua pele cor de chocolate ao leite que eu acabo me deliciando e sentindo um prazer incomensurável, com o simples fato de eu passar a mão, boca e provando do melhor chocolate do mundo.`}
    
    else(document.getElementsByTagName('p')[0].innerHTML = 'VOCÊ NÃO É A MARCELLA!')
}

else{
document.getElementsByTagName('h1')[0].innerText = `Feliz Páscoa pra você, ${nome}!`
}