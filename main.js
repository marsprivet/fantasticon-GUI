const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");
const { exec } = require("child_process");

function createWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 400,
    webPreferences: {
      preload: path.join(__dirname, "renderer.js"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });
  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

// ——— Новый обработчик «Browse…» для выбора папки с иконками
ipcMain.handle("select-icons-folder", async () => {
  const result = await dialog.showOpenDialog({
    properties: ["openDirectory"],
  });
  // Если нажали «Отмена», вернётся undefined
  return result.canceled ? null : result.filePaths[0];
});

// ——— Обработчик конвертации
ipcMain.handle("convert-icons", async (event, inputDir, outputDir) => {
  return new Promise((resolve, reject) => {
    const cmd = `npx fantasticon ${inputDir} -o ${outputDir} -c fantasticonrc.json`;
    exec(
      cmd,
      {
        env: {
          ...process.env,
          NODE_NO_WARNINGS: "1",
        },
      },
      (error, stdout, stderr) => {
        if (stderr && !error) console.warn("Fantasticon warning:", stderr);
        if (error) {
          console.error("Fantasticon error:", stderr || error.message);
          return reject(stderr || error.message);
        }
        resolve(stdout);
      }
    );
  });
});
