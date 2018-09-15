const readline = require("readline");
const cl = readline.createInterface(process.stdin, process.stdout);

/**
 * @typedef {Object} Answer
 * @property {String} cmd
 * @property {(Array<String> | Null)} args
 */
/**
 * @param question {String}
 * @returns {Promise<Answer>}
 */
const question = (question) => {
    return new Promise((res, req) => {
        cl.question(`${question} `, answer => {
            const ansArr = answer.split(" ").filter(w => w);
            res({
                cmd: ansArr[0],
                args: ansArr[1] ? ansArr[1].split("/") : []
            });
        });
    });
};

module.exports = {
    readline: question
};