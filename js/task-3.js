const profile = {
  username: "Jacob",
  playTime: 300,
  // Метод для зміни імені профілю
  changeUsername: function (newName) {
    this.username = newName;
  },
  // Метод для оновлення годин гри
  updatePlayTime: function (hours) {
    this.playTime += hours;
  },
  // Метод для отримання інформації
  getInfo: function () {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

// Перевірка результатів
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
