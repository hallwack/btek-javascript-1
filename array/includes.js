const { day } = require("../data/data");

// Method: Array includes()
// Digunakan untuk mengecek apakah data yang dicari ada di dalam array atau tidak
// Contoh:
const check = day.includes("Sabtu");
console.log(check);
// Expected Output: true

const check2 = day.includes("Minggu");
console.log(check2);
// Expected Output: false
