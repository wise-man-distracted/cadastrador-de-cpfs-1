const pessoas = require('./pessoas.json');
const fs = require('fs');
const posicaoDaPessoa = process.argv[2];
const nome = process.argv[3];
const cpf = process.argv[4];
const casado = (process.argv[5] == "1");
const filhos = process.argv.slice(6);
const pessoa = {nome, cpf, casado, filhos};
pessoas.splice(posicaoDaPessoa,1);
pessoas.push(pessoa);
fs.writeFileSync('pessoas.json', JSON.stringify(pessoas, null, 4))