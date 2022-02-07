const CPF = require('cpf');
const fs = require('fs');

console.log("Seja bem vindo ao cadastrador de CPFs")
//1 - capturar a informacao digitada pelo usuario
const cpf = process.argv[2];
//2 - validar o CPF
let cpfValido = CPF.isValid(cpf);
//3 - Caso a informacao seja um CPF valido, salvar no arquivo dados.txt caso contrario, exibir mensagem de erro
if(cpfValido){
console.log('CPF Valido! Salvando');
fs.writeFileSync('dados.txt', cpf + '\n', {flag:'a'});
}else{
console.log('CPF Invalido, digite novamente')
}
console.log("Fim");