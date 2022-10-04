const { identity } = require("../data/data");

// Method: Object entries()
// Digunakan untuk mengubah object menjadi nested array
// Contoh:
const entries = Object.entries(identity);
console.log(entries);

// Method ini juga bisa digunakan untuk mengubah object menjadi array of keys dengan meng-iterasi keys dan value nya menggunakan method forEach()
entries.forEach((entry) => {
  let key = entry[0];
  let value = entry[1];
  console.log(`${key}: ${value}`);
});
// Expected output:
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
