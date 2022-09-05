const path = require("path");
const { app, BrowserWindow } = require("electron");
const { ipcMain } = require("electron/main");

function createWindow() {
  const win = new BrowserWindow({
    minWidth: 940,
    minHeight: 480,
    frame: false,
    transparent: true, 
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  win.setAutoHideMenuBar(false)
  win.setMenuBarVisibility(false)
  if (app.isPackaged) {
    win.loadFile(path.join(__dirname, "../build/index.html"));
  } else {
    win.loadURL("http://localhost:3000");
  }
  ipcMain.on('minimize', () => {
    win.minimize()
  })
  ipcMain.on('maximize', () => {
    win.maximize()
  })
  ipcMain.on('unmaximize', () => {
    win.unmaximize()
  })
  ipcMain.on('close', () => {
    win.close()
  })
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})