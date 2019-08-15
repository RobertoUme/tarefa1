const data = require("./data.js");

const mora = data.find(data => data.address.city.toLowerCase() ==="Monroe".toLowerCase());

console.log(mora);
