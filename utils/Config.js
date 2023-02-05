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
        fs.readFile(this.configFile, (err, data) => {
            if (err) throw err;

            this.jsonConfig = JSON.parse(data);
            console.log(this.jsonConfig);
        });
    }

    get(key) {
        return this.jsonConfig.get(key);
    }

}

module.exports = Config;
