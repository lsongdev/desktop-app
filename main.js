const electron = require('electron');
// Module to create native browser window.
const { BrowserWindow, app } = electron;

const { NODE_ENV = 'development' } = process.env;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

// Module to control application life.
function createWindow () {
  const preload = ``;
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1000, 
    height: 600,
    frame: true,
    titleBarStyle: 'hidden',
    trafficLightPosition: { x: 10, y: 15 },
    transparent: true,
    webPreferences: {
      preload,
      webSecurity: true,
      nodeIntegration: false,
      contextIsolation: false,
    }
  });

  // mainWindow.setProgressBar(80)

  // and load the index.html of the app.
  mainWindow.loadURL(`https://console.lsong.org`)

  if(NODE_ENV === 'development'){
    // Open the DevTools.
    mainWindow.webContents.openDevTools()
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  app.quit()
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})