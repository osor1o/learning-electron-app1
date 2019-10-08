const electron = require("electron");
const imageSize = require("image-size")

const {app, BrowserWindow, ipcMain} = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on('getImageSize', (event, path) => {
    imageSize(path, (error, dimensions) => {
        mainWindow.webContents.send('setImageSize', dimensions);
    });
});