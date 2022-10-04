const { day } = require("../data/data");

// Method: Array concat()
// Digunakan untuk menggabungkan dua buah array menjadi satu array
// Contoh:
const sunday = ["Minggu"];
const allDay = day.concat(sunday);
console.log(allDay);
// Expected Output:
/*
  [
    'Senin',  'Selasa',
    'Rabu',   'Kamis',
    'Jumat',  'Sabtu',
    'Minggu'
  ]
 */
