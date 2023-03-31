try {
	const electronReload = require('electron-reloader')(module);
	electronReload(join(__dirname, '..', 'dist'), {});
} catch (_) {}

import { app, BrowserWindow } from 'electron';
import { join } from 'path';

function createWindow() {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
	});

	win.loadURL('http://localhost:3000/');
}

app.whenReady().then(() => {
	createWindow();

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	});
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
