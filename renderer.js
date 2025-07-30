const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  selectFolder: () => ipcRenderer.invoke('select-icons-folder'),
  convert: (inDir, outDir) => ipcRenderer.invoke('convert-icons', inDir, outDir), 
});
