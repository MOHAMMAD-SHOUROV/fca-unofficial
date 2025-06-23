const fs = require("fs");
const path = require("path");

module.exports = async function ({ api, event }) {
    if (event.type !== "message" || !event.body) return;

    const commandName = event.body.split(" ")[0].toLowerCase();
    const commandPath = path.join(__dirname, "../commands", `${commandName}.js`);

    if (fs.existsSync(commandPath)) {
        const command = require(commandPath);
        command({ api, event });
    }
};
