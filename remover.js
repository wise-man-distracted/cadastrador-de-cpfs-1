const pessoas = require('./pessoas.json');
const fs = require('fs');
// passo 1: Capturar o número digitado pelo usuário

const deletarPessoa = process.argv[2];

// Passo 2: Importar array de pessoas



// Passo 3: Remover a pessoa da posição da posição desejada

pessoas.splice(deletarPessoa,1)

// Passo 4: Salvar o array modificado (sem a pessoa) no arquivo

fs.writeFileSync('pessoas.json', JSON.stringify(pessoas, null, 4))