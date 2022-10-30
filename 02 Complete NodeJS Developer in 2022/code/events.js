const EventEmitter = require("events");
const celebrity = new EventEmitter();

// Obsever 1
celebrity.on("race win", () => {
  console.log("Congratulations! You are the best!");
});

celebrity.on("race win", () => {
  console.log("Boo I could have better than that");
});

celebrity.emit("race win");
