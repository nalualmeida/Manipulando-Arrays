var txtNumero = document.querySelector('#numero')
var txtBotaoAdd = document.querySelector('#botaoAdd')
var txtVisor = document.querySelector('.visor')
var txtBotaoCalcular = document.querySelector('#botaoCalcular')

var txtQtdNumeros = document.querySelector("#inputQtdNumeros");
var txtQtdPares = document.querySelector("#inputQtdPares");
var txtQtdImpares = document.querySelector("#inputQtdImpares");
var txtPorcentoPar = document.querySelector("#inputPorcentoPar");
var txtPorcentoImpar = document.querySelector("#inputPorcentoImpar");

var qtdNumeros = 0;
var qtdPares = 0;
var qtdImpares = 0;
var array = [];


txtBotaoCalcular.addEventListener('click', () => {
    txtQtdNumeros.value = qtdNumeros;
    txtQtdPares.value = qtdPares;
    txtQtdImpares.value = qtdImpares;

    let porcentoPar = (qtdPares / qtdNumeros) * 100
    txtPorcentoPar.value += `${porcentoPar.toFixed(2)}%` 
    let porcentoImpar = (qtdImpares / qtdNumeros) * 100
    txtPorcentoImpar.value += `${porcentoImpar.toFixed(2)}%`
});
  
txtBotaoAdd.addEventListener('click', () => {
    let numero = Number(txtNumero.value)

    if (txtNumero.value == ''){
        alert('Insira um número para ser adicionado ao array!')
    } else if (array.includes(numero)){
        alert('Este número já foi informado. Insira outro!')
    } else{

        txtVisor.innerHTML += `<p> O número ${numero} foi adicionado </p>`
        array.push(numero)

        qtdNumeros += 1;

        if (numero % 2 == 0) {
        qtdPares += 1;
        } else {
        qtdImpares += 1;
        }

        txtNumero.value = ""
        txtNumero.focus()
    }

})