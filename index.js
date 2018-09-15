const { readline } = require("./lib");
const commands = require("./commands");

(async function start() {
    const input = await readline(commands.getCurrentDir());
    const cmd = commands[input.cmd] || commands["invalidCommand"];
    try {
        const response = cmd(input.args);
        if(response) console.log("Response:", response);
    } catch (error) {
        console.error(error.message);
    }
    start();
})();