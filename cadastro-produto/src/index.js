import { cadastrarProduto } from './modules/cadastrar.js';

var produtos = [];
window.produtos = produtos;

var btnCadastrar = document.querySelector('#btn-cadastrar');

console.log(btnCadastrar);


btnCadastrar.addEventListener('click', cadastrarProduto);


// btnCadastrar.addEventListener('click', function(e) {
//     e.preventDefault();
//     console.log('Clica');
// });


// class Produto {
//     constructor(nome, preco) {
//         this.nome = nome;
//         this.preco = preco;
//         this.calcularDesconto = () => {
//             console.log('calcular desconto...');
//         }
//     }
// }

// const p = new Produto('Iphone 12', 1200);
// console.log(p);
