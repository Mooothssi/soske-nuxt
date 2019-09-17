const fs = require('fs')
const path = require('path');
const ini = require('ini')
//If don't assign the parameter delimiter then the default value \n will be used
const commonPath = path.join(__dirname, "../../common").toString()
const settingsPath = path.join(commonPath, "settings.ini").toString()
const commonConfig = ini.parse(fs.readFileSync(settingsPath, 'utf-8'));

function config(propertyName, defaultValue="") {
    const val = commonConfig.settings[propertyName];
    if (!val) {
        return defaultValue
    } else {
        return commonConfig.settings[propertyName];
    }
}
const dev_mode = !(process.env.NODE_ENV === 'production')

module.exports = {
    api_url: dev_mode ? config("API_DEV_URL", config("API_URL")) : config("API_URL"),
    api_browser_url: dev_mode ? config("API_DEV_BROWSER_URL", config("API_BROWSER_URL")) : config("API_BROWSER_URL")
}