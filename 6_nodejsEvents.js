import { EventEmitter } from "node:events";

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("eventIsFired", () => {
  console.log("an event occurred!");
  setTimeout(() => {
    console.log("event is completed");
  }, 3000);
});
myEmitter.emit("eventIsFired");
