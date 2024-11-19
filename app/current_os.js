const os = require("os");

const is_mac = os.platform() === "darwin";
const is_window = os.platform() === "win32";
const is_linux = os.platform() === "linux";

module.exports = {
    is_mac,
    is_window,
    is_linux
}