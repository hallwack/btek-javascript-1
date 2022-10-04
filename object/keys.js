const { identity } = require("../data/data");

// Method: Object keys()
// Digunakan untuk mendapatkan semua key dari suatu object
// Contoh:
const keys = Object.keys(identity);
console.log(keys);
// Expected Output: [ 'name', 'nim', 'tools', 'activeTime' ]

// Method ini juga bisa digunakan untuk menghitung banyak keys yang ada di dalam object menggunakan property length
const length = Object.keys(identity).length;
console.log(length);
// Expected Output: 4

// Method ini juga bisa digunakan untuk mengubah object menjadi array of keys dengan meng-iterasi keys dan value nya menggunakan method forEach()
Object.keys(identity).forEach((key) => {
  let value = identity[key];
  console.log(`${key}: ${value}`);
});
// Expected Output:
/*
name: Raihan Adam
nim: 1197050109
tools: neovim,vscode,git,brave,zsh
activeTime: activeTime(startHour, endHour) {
    console.log(
      `${this.name} aktif dari jam ${startHour} sampai jam ${endHour}`
    );
  }
*/
