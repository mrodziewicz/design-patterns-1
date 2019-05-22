class Logger {
  log( content ) {
    console.log(`Log: ${content}`);
  }
}

class MailSender {
  sendMail( content ) {
    console.log(`Mail sent: ${content}`)
  }
}

/* --- */

const logger = new Logger();
logger.log('Something happened!');


// TODO: adapter class
// zadanie - napisz adapter, który pozwoli skorzystać z klasy MailSender z takim samym API, jak Logger

// const mailLogger = new ...
// mailLogget.log('Something happened!'));