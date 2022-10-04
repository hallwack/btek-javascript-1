const { identity } = require("../data/data");

// Method: Object create()
// Digunakan untuk membuat object baru dari object yang sudah ada sebelumnya
// Contoh:
const myIdentity = Object.create(identity);
console.log(myIdentity.name);
// Expected Output : Raihan Adam
