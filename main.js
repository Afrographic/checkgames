const { ipcMain, app, BrowserWindow } = require('electron');
const { dialog } = require('electron/main');
const path = require("path");

const electron = require('electron');
const fs = require("fs");


let win;

function createWindow() {

    win = new BrowserWindow({
        width: 1536,
        height: 800,
        resizable: false,
        show: false,
        icon: path.join(__dirname, 'icon.ico'),
        alwaysOnTop:false,
    })

    win.setMenu(null);
    win.loadFile(path.join(__dirname, 'ui/ui.html'));
    // win.webContents.openDevTools();

    win.on('close', () => {
        win = null;
    })

    win.once("ready-to-show", () => {
        win.show();
    })


    
}

app.on('ready', createWindow);
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', function () {
    if (win == null) {
        createWindow();
    }
})

