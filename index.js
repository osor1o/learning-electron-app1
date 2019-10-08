const electron = require("electron");

const app = electron.app;

app.on('ready', () => {
    console.log('A aplicação Electron foi criado e pronta para interação');
});