// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
 
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.

let mainWindow
let loadingWindow 

const electron = require('electron')
const Menu = electron.Menu  
 
 function createWindowLoading(){
	 //创建主程序
	  createWindow(); 
	  //隐藏主程序
	  mainWindow.hide();  
	  //创建loading模块
	  loadingWindow = new BrowserWindow({
        width: 550,
        height: 400, 
		frame: false,
        webPreferences: {
            nodeIntegration: false,//false 代表禁用Node.js 可以使用jquery 
        }
    }) 
	loadingWindow.loadFile('index.html');  
	
	 //结束加载，进入主程序
	 var intervalSize = 0;
	 var myVar = setInterval(function(){
		intervalSize++;
		try {
			var str = loadingWindow.getTitle();
			if(str=="end" || intervalSize>60){	//超过一分钟还没进入则结束
				loadingWindow.close(); 
				mainWindow.show();
				clearInterval(myVar);
			}
		}
		catch(err){ 
			clearInterval(myVar);  
		}
	 }, 1000);  
 } 
 
function createWindow(){
	
	//隐藏菜单
	//Menu.setApplicationMenu(null)
    // Create the browser window.
    mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		//transparent: true,固定
		//frame: false,
        webPreferences: {
            nodeIntegration: false,//禁用Node.js 这样才能使用jquery
			//fullscreen: true
        }
    }) 
	//打开调试器
	// mainWindow.webContents.openDevTools()
 
    // and load the index.html of the app.
    mainWindow.loadFile('pro/index.html')
  
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
app.on('ready', createWindowLoading)
 
// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') app.quit()
})
 
app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) createWindow()
}) 
 
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here. 