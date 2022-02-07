const pessoas = require('./pessoas.json');
const saoCasados = pessoas.filter(function(pessoaCasada){
    return pessoaCasada.casado // nao precisa de == pois ja tem o valor de True ou False
});
console.table(saoCasados)
