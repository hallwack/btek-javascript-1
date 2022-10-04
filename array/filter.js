const { day } = require("../data/data");

// Method: Array filter()
// Digunakan untuk mencari beberapa data di dalam array berdasarkan kriteria tertentu
// Contoh:

const moreOrEqualFiveChar = day.filter((day) => day.length >= 5)
console.log(moreOrEqualFiveChar)
// Expected Output: [ 'Senin', 'Selasa', 'Kamis', 'Jumat', 'Sabtu' ]
