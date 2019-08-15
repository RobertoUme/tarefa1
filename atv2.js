const data= require("./data.js");

const pessoa = data.filter(data => data.gender.includes('Female') &&  data.age>=18);

console.log(pessoa);
