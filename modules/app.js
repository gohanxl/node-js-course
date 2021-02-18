// first part

const logService = require("./logger");
const { Logger } = logService;
const logger = new Logger();

// logger.logMessage("sarasa");

const sayHello = (name) => {
  console.log("hello " + name);
};

// sayHello("pepe");

// second part

const path = require("path");

const pathObject = path.parse(__filename);

// console.log(pathObject);

const operativeSystem = require("os");

const totalMemory = operativeSystem.totalmem();
const freeMemory = operativeSystem.freemem();

// console.log(`Total Memory: ${totalMemory}\nFree Memory: ${freeMemory}`);

const fs = require("fs");

const files = fs.readdirSync("./");

// console.log(files);

const filesAsync = fs.readdir("./", (err, files) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log("Result", files);
  }
});

// Events

logger.on("messageLogged", (eventDetails) => {
    console.log("Listener Called", eventDetails);
  });  

logger.logMessage("message from app.js");

