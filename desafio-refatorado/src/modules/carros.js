export const pesquisarCarros = (carros, termo) => {
    console.log(CARROS_GLOBAL);
    return carros.filter((carro) => {
        const nomeMinusculo = carro.nome;
        const termoMinusculo = termo.toLowerCase();
        return nomeMinusculo.includes(termoMinusculo);
    });
}

// export const pesquisarCarros = (carros, termo) => carros
//     .filter(carro => 
//         carro.nome
//             .toLowerCase()
//             .includes(termo.toLowerCase()));


    