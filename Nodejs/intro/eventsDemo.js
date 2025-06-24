import { error } from "console";
import { EventEmitter } from "events";

const myEmitter = new EventEmitter();
function greetings(name){
  console.log("Hello, !" + name);
}
function goodBye(name){
  console.log("Goodbye, !" + name);
}

//Register event listeners
myEmitter.on("greet", greetings);
myEmitter.on("goodbye", goodBye);

// Emit events
myEmitter.emit("greet", "Gambira"); // Output: Hello, World!
myEmitter.emit("goodbye", "Gambira"); // Output: Goodbye, World!

// Error events

myEmitter.on("error", (err) => {
  console.log(err)
})

// Simulate an error
myEmitter.emit("error", new Error("Something went wrong!"));