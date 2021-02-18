const EventEmitter = require("events");

const url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  logMessage = (message) => {
    console.log(message);
    
    this.emit("messageLogged", { id: 1, url: "http://" });
  };
}

// emitter.on("messageLogged", (eventDetails) => {
//   console.log("Listener Called", eventDetails);
// });

// emitter.on("logging", ({ message }) => {
//   console.log(message);
// });

// emitter.emit("logging", { message: "Message logged" });

module.exports.Logger = Logger;
// module.exports.endpoint = url;
