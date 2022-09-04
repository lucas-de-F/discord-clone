const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('mainBar', {
    minimize: () => ipcRenderer.send('minimize'),
    maximize: () => ipcRenderer.send('maximize'),
    unmaximize: () => ipcRenderer.send('unmaximize'),
    close: () => ipcRenderer.send('close'),
})