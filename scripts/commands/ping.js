module.exports = function ({ api, event }) {
    api.sendMessage("🏓 Pong!", event.threadID, event.messageID);
};
