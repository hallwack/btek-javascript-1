const { day } = require("../data/data");

// Method: Array slice()
// Digunakan untuk mengambil satu atau beberapa data sesuai urutannya yang nanti dimasukkan di dalam parameter method.
// Parameter pertama yaitu untuk posisi index awal yang ingin diambil
// Parameter bisa diisi dengan nilai negatif untuk perhitungan dari akhir array
// Parameter kedua yaitu untuk posisi index terakhir sebagai batas potongan aray
// Contoh:
const slice = day.slice(3, 5);
console.log(slice);
// Expected Output: [ 'Kamis', 'Jumat' ]

const slice2 = day.slice(-1);
console.log(slice2);
// Expected Output: [ 'Sabtu' ]

const slice3 = day.slice(3, -2);
console.log(slice3);
// Expected Output: [ 'Kamis' ]
