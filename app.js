const pessoas = require('./pessoas.json');
const fs = require('fs');
// console.table(pessoas);
// console.log(pessoas[0].filhos[1])
// Passo 1: Capturar: nome, cpf, casado, filhos do terminal
// e guardar em variáveis de mesmos nomes

const nome = process.argv[2];
const cpf = process.argv[3];
const casado = (process.argv[4] == "1"); //? true : false
const filhos = process.argv.slice(5);

/*const filhos = []
for(let i=5; i<process.argv.length; i++){
    filhos.push(process.argv[i])
}*/

// Passo 2: Criar um objeto com essas informações

const pessoa = {nome, cpf, casado, filhos};

// Passo 3: Adicionar o objeto criado ao array pessoas

pessoas.push(pessoa);

// Passo 4: Salvar o array de pessoas no arquivo pessoas.json

fs.writeFileSync('pessoas.json', JSON.stringify(pessoas, null, 4))

// Passo 5: Mostrar o array de pessoas no formarto de tabela

console.table(pessoas)
console.log(zug)