var winston = require("winston");

var init_logger = function () { 
  winston = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)({
        level: 'trace',
        prettyPrint: true,
        colorize: true,
        silent: false,
        timestamp: false
      })
    ],
    levels: {
      trace: 0,
      input: 1,
      verbose: 2,
      prompt: 3,
      debug: 4,
      info: 5,
      data: 6,
      help: 7,
      warn: 8,
      error: 9
    },
    colors: {
      trace: 'magenta',
      input: 'grey',
      verbose: 'cyan',
      prompt: 'grey',
      debug: 'blue',
      info: 'green',
      data: 'grey',
      help: 'cyan',
      warn: 'yellow',
      error: 'red'
    }
  });

};

init_logger ();

module.exports = winston;
