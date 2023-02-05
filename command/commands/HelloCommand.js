const Command = require("../Command");

class HelloCommand extends Command {
    execute(msg) {
        console.log("inside of HelloCommand")
        msg.reply("Hallo (:")
        return true
    }

}

module.exports = HelloCommand;
