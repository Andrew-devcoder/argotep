const fs = require("fs");

const data = fs.readFileSync("./database.json");

console.log(data);
