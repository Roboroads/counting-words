const {app, BrowserWindow} = require("electron");
const path = require("path");

let window;

const openWindow = () => {
    window = new BrowserWindow({
        width: 900,
        height: 680,
    });

    const mode = process.env.NODE_ENV;
    const url = mode === "production"
        ? `file://${path.join(__dirname, "../public/index.html")}`
        : "http://localhost:5000";

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