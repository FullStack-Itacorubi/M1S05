'use strict';

class Pessoa {
    get idade() {
        return 50;
    }
}


var pessoa = new Pessoa();
pessoa.idade = 20;

console.log(pessoa.idade);


