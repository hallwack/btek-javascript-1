// Method: Array forEach
// Digunakan untuk iterasi data di dalam array tanpa mengembalikan nilai return
// Contoh:

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
nums.forEach((num) => console.log(num));
// Expected Output:
// Senin
// Selasa
// Rabu
// Kamis
// Jumat
// Sabtu

// Karena tidak mengembalikan nilai return, maka hasil dibawah ini bernilai undefined
const hasil2 = nums.forEach((num) => num);
console.log(hasil2)
