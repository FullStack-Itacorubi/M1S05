import { listar } from './listar.js';

export function cadastrarProduto(event) {
    console.log(event);
    event.preventDefault();
    const formulario = document.querySelector('#formulario-cadastro');
    
    const obj = {
        nome: formulario.elements.nome.value,
        preco: formulario.elements.preco.value
    }

    produtos.push(obj);

    formulario.elements.nome.value = '',
    formulario.elements.preco.value = ''

    console.log('obj produto', obj);
    console.log('lista de produtos', produtos);
    listar();
};
