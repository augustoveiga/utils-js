let jsonFile = require('./data.json'); //caminho para o arquivo .json

let json = jsonFile.hits.hits
let totalHits = 0
let transactionSale = 0
let resultFim = 0

for(i = 0; i < json.length; i++) { // percorrendo o arquivo .json

    let data = json[i]._source
    

    if(data.area === 150 && data.sub_category_name === 'Apartamento' 
    && data.neighborhood_id === 9542 
    && data.transaction_sale >= 0) {
        console.log(data) // imprimindo no console o resultado do 'filtro' (if)
        totalHits++
        transactionSale += data.transaction_sale
    }

}

resultFim = transactionSale/totalHits

console.log(`Total Encontrado: ${totalHits}`)
console.log(resultFim.toFixed(2))




