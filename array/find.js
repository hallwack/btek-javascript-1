const { day } = require("../data/data");

// Method: Array find()
// Digunakan untuk mencari suatu data di dalam array berdasarkan kriteria tertentu
// Contoh:

const moreFourChar = day.find(day => day.length > 4)
console.log(moreFourChar)
// Expected Output: Senin
