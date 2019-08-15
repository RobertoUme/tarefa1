
// 4. Multiplique a idade de todos usuários por dois e depois realize um filtro
// nos usuários que possuem no máximo 50 anos
const data = require("./data.js");

const idade = data.map(data=> (data.age*2)<=50);
const anos = data.map(data=> `${data.first_name} tem ${data.age*2}`);
for (var i=0; i<=idade.length;i++){

if (idade[i] === true){
    console.log(anos[i]);
}
}
