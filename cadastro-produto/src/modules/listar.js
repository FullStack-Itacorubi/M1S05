export function listar() {
    const ul = document.createElement('ul');
    let produtosLi = '';
    produtos.forEach(produto => {
        // const li = document.createElement('li');
        // li.innerText = produto.nome;
        // ul.appendChild(li)

        produtosLi += `
            <li >
                ${produto.nome} R$ ${produto.preco} 
                <button id="btn-editar" onclick="editar(this)">editar</button>
                <button id="btn-excluir" onclick="excluir(this)">excluir</button>
            </li>
        `;
    });
    document.querySelector('.listagem').innerHTML = produtosLi;
    
    console.log(ul);
}
