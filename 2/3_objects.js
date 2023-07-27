const player = {
  name: "sujin",
  points: 10,
  fat: true,
};

console.log(player);

// console.log(player.name);
console.log(player["name"]);
console.log(player.points);
console.log(player.fat);

player.fat = false;
console.log(player.fat);

// player = false; const로 선언된 object이므로 객체 전체를 하나의 값으로서 업데이트하려고 하면 해당 오류 발생

player.lastName = "potato";
console.log(player);
player.points = player.points + 15;
console.log(player.points);
