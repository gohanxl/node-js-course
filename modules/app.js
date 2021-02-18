// first part

const logger = require('./logger');

logger.logMessage("sarasa")

const sayHello = (name) => {
    console.log("hello " + name)
}

sayHello("pepe")

// second part

const path = require('path');

const pathObject = path.parse(__filename)

console.log(pathObject)

const operativeSystem = require("os");

const totalMemory = operativeSystem.totalmem();
const freeMemory = operativeSystem.freemem();

console.log(`Total Memory: ${totalMemory}\nFree Memory: ${freeMemory}`);
