const { day } = require("../data/data");

// Method: Array splice()
// Digunakan untuk menghapus, menambah, atau mengganti data array dengan data yang baru, baik itu satu data atau beberapa data
// Parameter pertama yaitu pilihan data (tidak berdasarkan penomoran index)
// Parameter kedua yaitu banyak data yang ingin diubah
// Parameter ketiga dan seterusnya merupakan data baru yang ingin diubah atau yang ingin ditambah
// Contoh:
day.splice(1, 1, "Tuesday")
console.log(day)
// Expected Output: [ 'Senin', 'Tuesday', 'Kamis', 'Jumat', 'Sabtu' ]

day.splice(6, 0, "Minggu")
console.log(day)
// Expected Output: [ 'Senin', 'Tuesday', 'Kamis', 'Jumat', 'Sabtu', 'Minggu' ]

day.splice(4, 2)
console.log(day)
// Expected Output: [ 'Senin', 'Tuesday', 'Rabu', 'Kamis', 'Minggu' ]
