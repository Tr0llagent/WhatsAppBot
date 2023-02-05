
class CommandManager {

    config;

    constructor(config) {
        this.config = config;
    }

    commands = []


    registerCommands() {
        this.registerCommand("HelloCommand", "hello", "!hello", "Just says Hello", true)
    }

    registerCommand(fileName, name, syntax, description, isPublic) {
        const command = require("./commands/" + fileName + ".js")
        this.commands.push(new command(name, syntax, description, isPublic))
        console.log(`Registered:\n  Name: ${name}\n  Systax: ${syntax}\n  Description: ${description}\n  IsPublic: ${isPublic}`)
    }

    executeCommands(msg) {
        this.commands.forEach(cmd => {
            if (msg.body.startsWith(this.config.get("prefix") + cmd.name)) {
                if (!cmd.execute(msg)) {
                    msg.reply("Usage:\n" + cmd.syntax)
                }
                return 0
            }
        })
    }

}

module.exports = CommandManager;
