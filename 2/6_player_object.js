const player = {
  name: "nico",
  sayHello: function (otherPersonsName) {
    console.log(`${otherPersonsName} nice to meet you`);
  },
};

console.log(player, console);
console.log(player.name);
console.log(player.sayHello());
player.sayHello("sj");
player.sayHello("nico");
