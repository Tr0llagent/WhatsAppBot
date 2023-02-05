const CommandManager = require('./command/CommandManager');

const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const Config = require("./utils/Config");

const client = new Client();

const config = new Config("./config.json");

const commandManager = new CommandManager();
commandManager.registerCommands()

client.on('loading_screen', (percent, message) => {
    console.log('LOADING SCREEN', percent, message);
});

client.on('authenticated', () => {
    console.log('AUTHENTICATED');
});

client.on('auth_failure', msg => {
    console.error('AUTHENTICATION FAILURE', msg);
});

client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async msg => {
    commandManager.executeCommands(msg)
});

client.initialize();
