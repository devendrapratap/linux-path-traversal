const { Stack: History, Tree: Dir } = require("../collections");

const history = new History();
const root = new Dir("~");
let currentDir = root;

/**
 * Change Directory
 * @param path {Array<String>}
 */
const cd = (paths) => {
    let dir = currentDir;
    for(index in paths) {
        const path = paths[index];
        if(path === "..") {
            if(dir.parent) dir = dir.parent;
            else throw Error("Invalid Path Provided");
        } else if(path === "~") {
            dir = root;
        } else {
            let flag = true;
            for(index in dir.childs) {
                const child = dir.childs[index];
                if(child.name === path) {
                    dir = child;
                    flag = false;
                    break;
                }
            }
            if(flag) {
                throw Error("Invalid Path Provided");
            }
        }
    }

    // set the new current directory
    currentDir = dir;
};

/**
 * Make Directory
 * @param paths {Array<String>}
 */
const mkdir = (paths) => {
    let dir = currentDir;
    for(index in paths) {
        const path = paths[index];
        if(path === "..") {
            if(dir.parent) dir = dir.parent;
            else throw Exception("Invalid Path Provided");
        } else if(path === "~") {
            dir = root;
        } else {
            let flag = true;
            for(child in dir.childs) {
                if(child.name === path) {
                    dir = child;
                    flag = false;
                    break;
                }
            }
            if(flag) {
                const tmp = new Dir(path, dir);
                dir.childs.push(tmp);
            }
        }
    }
};

/**
 * List Directory Content
 * @returns {Array<String>}
 */
const ls = () => {
    return currentDir.childs.map(dir => dir.name);
};

/**
 * Print Working Directory
 * @returns {String}
 */
const pwd = () => {
    /**
     * @type {Array<String>}
     */
    let dirs = [];
    let dir = currentDir;

    while(dir) {
        dirs.unshift(dir.name);
        dir = dir.parent;
    }

    return dirs.join("/");
};

/**
 * Remove Directory and its content
 */
const rm = (path) => {

};

/**
 * Returns the current Directory Name
 * @returns {String}
 */
const getCurrentDir = () => {
    return currentDir.name;
};

const invalidCommand = () => {

}

module.exports = {
    cd, mkdir, ls, rm, getCurrentDir, invalidCommand
}