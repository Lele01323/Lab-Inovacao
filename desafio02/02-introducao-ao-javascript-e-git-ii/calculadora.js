//Pegar os botões da calculadora
//let display = document.getElementByClass('display');
// let ce = document.getElementById('limparCampos');
// let c = document.getElementById('apagarCampo');
// let ant = document.getElementById('anterior');
// let divisao = document.getElementById('divisao');

// let numSete = document.getElementById('numSete').value;
// let numOito = document.getElementById('numOito');
// let numNove = document.getElementById('numNove');
// let multiplicacao = document.getElementById('multiplicacao');
// let numQuatro = document.getElementById('numQuatro');
// let numCinco = document.getElementById('numCinco');
// let numSeis = document.getElementById('numSeis');
// let subtracao = document.getElementById('subtracao');
// let numUm = document.getElementById('numUm');
// let numDois = document.getElementById('numDois');
// let numTres = document.getElementById('numTres');
// let soma = document.getElementById('soma');
// let maisMenos = document.getElementById('maisMenos');
// let numZero = document.getElementById('numZero');
// let virgula = document.getElementById('virgula');
// let igual = document.getElementById('igual');

function botaoIgual(){
    let display = document.getElementById('display');

    if(display.textContent != 'Erro'){
        document.querySelector('.display').innerHTML = eval(display.innerHTML);
    }
}


function Inserir(num) {
    let display = document.getElementById('display');

    display.innerHTML += num;
    // if(display.textContent == " "){
    //     display.textContent = num.toString();
    // }
    // else {
    //     display.textContent = display.textContent + num.toString();
    // }
    
}

// function botaoOp(ope){
//     let display = document.getElementById('display');

//     // if (display.textContent != " ") {
//     //     let number1 = display.textContent;
//     //     operacoes(number1);
//     //      console.log(num);
//     //     display.textContent = display.textContent = " ";
//     //     display.textContent = ope;
//     //     let number2 = display.textContent;
//     //     operacoes(number2);
        
//     // }
// }

function limparCampos(){
    let display = document.getElementById('display');

    display.textContent = " ";
}

// function apagarCampo(){
//     let display = document.getElementById('display');
//     const str = display.textContent.substring(0, display.length - 1);
    
//     display.textContent = str;
// }

// function operacoes(number1, number2){
//     //let display = document.addEventListener(onchange,)
//     let numero1 = number1;
//     let numero2 = number2;
//     let separador;

//     // numero2.split("")

//     // if (numero.split("+")) {
//     //     console.log('teste1');
//     // } 
//     // else if(numero.split("-")) {
//     //     console.log('teste2');
//     // }

//   console.log(numero1);
//     console.log(numero2);
// }