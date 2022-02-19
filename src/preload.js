console.log('hello preload.js');
const {contextBridge, ipcRenderer} = require('electron');
const si = require('systeminformation');

contextBridge.exposeInMainWorld('api', {
    close: () => ipcRenderer.send('close-app'),
    getCurrentLoad: () => si.currentLoad()
    .then(data => {
        return data.currentLoad;
    })
    .catch(error => console.error(error)),

});
