const Command = require("../Command");

class HelloCommand extends Command {
    execute(msg) {
        msg.reply("Hallo (:")
        return true
    }

}

module.exports = HelloCommand;
