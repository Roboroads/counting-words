const {app, BrowserWindow} = require("electron");
const path = require("path");

let window;

const openWindow = () => {
    window = new BrowserWindow({
        width: 900,
        height: 680,
    });

    const url = process.env.APP_IS_DEV == "true"
        ? "http://localhost:5000"
        : `file://${path.join(__dirname, "../public/index.html")}`;

    window.loadURL(url);
    window.on("closed", () => {
        window = null
    });
};

app.on("ready", openWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
})
app.on("activate", () => {
    if (window === null) {
        openWindow();
    }
})