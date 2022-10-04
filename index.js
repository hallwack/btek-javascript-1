const identity = {
  name: "Raihan Adam",
  nim: 1197050109,
  tools: ["neovim", "vscode", "git", "brave", "zsh"],
  activeTime(startHour, endHour) {
    console.log(
      `${this.name} aktif dari jam ${startHour} sampai jam ${endHour}`
    );
  },
};

// Method: Object create()
// Digunakan untuk membuat object baru dari object yang sudah ada sebelumnya
// Contoh:
const myIdentity = Object.create(identity)
console.log(myIdentity.name)
// Expected Output : Raihan Adam
