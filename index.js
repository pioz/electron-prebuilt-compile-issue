import { app, BrowserWindow } from 'electron'
import path from 'path'
import url from 'url'

let win = null

function createWindow () {
  win = new BrowserWindow({title: 'Another Electron app', width: 1024, height: 768})
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
  win.webContents.openDevTools()
  win.on('closed', () => {
    app.quit()
  })
}

app.on('ready', createWindow)
