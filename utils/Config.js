const fs = require("fs");

class Config {

    defaultConfig = {
        "prefix": "!",
        "allowedNumbers": [
            "123",
            "456"
        ]
    }

    configFile;
    jsonConfig;

    constructor(configFile) {
        this.configFile = configFile;
        this.generateFile()
        this.readConfig()
    }

    generateFile() {
        if (fs.existsSync(this.configFile)) return;
        fs.writeFile(this.configFile, JSON.stringify(this.defaultConfig), (error) => {
            if (error) throw error;
            console.log('Config created!');
        });
    }

    readConfig() {
        const content = fs.readFileSync(this.configFile);
        this.jsonConfig = JSON.parse(content.toString())
    }

    get() {
        return this.jsonConfig
    }

}

module.exports = Config;
