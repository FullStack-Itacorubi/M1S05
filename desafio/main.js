
class Ingresso {
    constructor(nome, valor, data, numero) {
        this.numero = numero;
        this.nome = nome;
        this.valor= valor;
        this.data = data
    }
}



var ingresso1 = new Ingresso('Coldplay', 400.00, '28/08/2023', '12SADV1');
var ingresso2 = new Ingresso('U2', 350.00, '04/09/2023', 'L341AV13');

var ingressoComprado1 = comprarIngresso(ingresso1, 'Ana');
var ingressoComprado2 = comprarIngresso(ingresso2, 'Joaquim');

var ingressoVendido = venderIngresso(ingresso1, 'Joaquim');

console.log(ingressoComprado1);
console.log(ingressoComprado2);
console.log(ingressoVendido);

function comprarIngresso(ingresso, pessoa) {
    return `Sr(a) ${pessoa} acaba de adquirir o último ingresso para o show do ${ingresso.nome} se será no dia ${ingresso.data}`;
}

function venderIngresso(ingresso, pessoa) {
    return `Sr(a) ${pessoa} seu ingresso nº ${ingresso.numero} foi vendido`;
}





function somador(numeros) {
    const resultado = numeros.reduce((acumulador, valorAtual) => {
            return acumulador + valorAtual
    }, 0);

    return resultado;
}

var soma = somador([10, 20, 30]);
console.log('O resultado da soma dos valores é: ', soma);







var frase = 'Imagine uma nova história para sua vida e acredite nela.';
var termo = 'VsiDA';

console.log(pesquisarTermo(frase, termo) ? 'Encontrou o termo' : 'Não encontrou o termo');

function pesquisarTermo(frase, termo) {
    return frase.toLowerCase().includes(termo.toLowerCase())
}




var carros = [
    {
        nome: 'Fiat - Uno - 2012',
    },
    {
        nome: 'Volkswagen - Gol G2 - 2009',
    },
    {
        nome: 'Renault - Logan - 2014',
    },
    {
        nome: 'Toyota - Corolla - 2015',
    },
    {
        nome: 'Fiat - Argo - 2020'
    },
    {
        nome: 'Renault - Clio - 2022'
    }
];

function pesquisarCarros(carros, termo) {
    return carros.filter(function(carro) {
        const nomeMinusculo = carro.nome.toLowerCase();
        return nomeMinusculo.includes(termo.toLowerCase())
    });
}

console.log('Carros encontrados são: ', pesquisarCarros(carros, 'Renault'));