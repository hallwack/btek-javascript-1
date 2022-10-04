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

const day = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]

module.exports = {
  identity,
  day
};
