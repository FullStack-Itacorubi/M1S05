export const produtoComponent = (nome, preco) => `
    <li >
        ${nome} R$ ${preco} 
        <button id="btn-editar" onclick="editar(this)">editar</button>
        <button id="btn-excluir" onclick="excluir(this)">excluir</button>
    </li>
`
