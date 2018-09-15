class Tree {
    /**
     * @param name {String}
     * @param parent {Tree}
     */
    constructor(name, parent=null) {
        this.name = name;
        this.parent = parent;

        /**
         * @type {Array<Tree>}
         */
        this.childs = new Array();
    }

    toString() {
        return `Directory Name: ${this.name}`;
    }
}

module.exports = Tree;