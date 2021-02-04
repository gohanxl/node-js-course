const url = "http://mylogger.io/log";

const logMessage = message => {
    console.log(message);
}

module.exports.logMessage = logMessage;
// module.exports.endpoint = url;