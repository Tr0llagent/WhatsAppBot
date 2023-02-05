
class Command {
    name;
    syntax;
    description;
    isPublic;

    constructor(name, syntax, description, isPublic) {
        this.name = name;
        this.syntax = syntax;
        this.description = description;
        this.isPublic = isPublic;
    }

    execute(msg) {
        throw new Error("Must be overwritten")
    }

}
module.exports = Command
