const { identity } = require("../data/data");

// Method: Object assign()
// Digunakan untuk menggabungkan dua buah oject menjadi satu object baru
// Contoh:
const company = {
  name_company: "BTEK",
  address_company: "Dago",
  year_company: 2022,
};

const allObject = Object.assign(identity, company);
console.log(allObject);
// Expected Output
/*
{
  name: 'Raihan Adam',
  nim: 1197050109,
  tools: [ 'neovim', 'vscode', 'git', 'brave', 'zsh' ],
  activeTime: [Function: activeTime],
  name_company: 'BTEK',
  address_company: 'Dago',
  year_company: 2022
}
*/

// Selain menggunakan method assign(), menggabungkan dua buah object juga bisa dilakukan dengan menggunakan spread operator
// Contoh:
const newObject = { ...identity, ...company };
console.log(newObject);

// Expected Output
/*
{
  name: 'Raihan Adam',
  nim: 1197050109,
  tools: [ 'neovim', 'vscode', 'git', 'brave', 'zsh' ],
  activeTime: [Function: activeTime],
  name_company: 'BTEK',
  address_company: 'Dago',
  year_company: 2022
}
*/
