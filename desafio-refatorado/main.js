import { somador } from './src/modules/calculos.js';
import { pesquisarCarros } from './src/modules/carros.js';
import { Ingresso } from './src/modules/classes/Ingresso.js';
import { comprarIngresso, venderIngresso } from './src/modules/ingressos.js';
import { pesquisarTermo } from './src/modules/utils.js';


// INGRESSO
const ingresso1 = new Ingresso('Coldplay', 400.00, '28/08/2023', '12SADV1');
const ingresso2 = new Ingresso('U2', 350.00, '04/09/2023', 'L341AV13');

const ingressoComprado1 = comprarIngresso(ingresso1, 'Ana');
const ingressoComprado2 = comprarIngresso(ingresso2, 'Joaquim');

ingresso1.valor = 500;
ingresso1.valor = 1000;
ingresso1.valor = 1400;
const ingressoVendido = venderIngresso(ingresso1, 'Joaquim');

console.log(ingressoComprado1);
console.log(ingressoComprado2);
console.log(ingressoVendido);

// SOMA
const soma = somador([10, 20, 30]);
console.log('O resultado da soma dos valores é: ', soma);

// PESQUISAR TERMO
const frase = 'Imagine uma nova história para sua vida e acredite nela.';
const termo = 'VsiDA';
console.log(pesquisarTermo(frase, termo) ? 'Encontrou o termo' : 'Não encontrou o termo');

// BUSCAR CARROS
const termoCarro = 'FIAT';

var CARROS_GLOBAL = [
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

window.CARROS_GLOBAL = CARROS_GLOBAL;
const termoEncontrado = pesquisarCarros(CARROS_GLOBAL, termoCarro);
console.log('Carros encontrados são: ', termoEncontrado);
