class Stack {
    constructor() {
        /**
         * @type {Array<String>}
         */
        this.stack = new Array();
    }

    /**
     * Add item to Stack
     * @param item {String}
     */
    add(item) {
        this.stack.unshift(item);
    }

    /**
     * Check whether stack is empty or not
     */
    isEmpty() {
        return this.stack.length === 0;
    }

    /**
     * Returns the Array Representation of Stack
     */
    toArray() {
        return this.stack.slice();
    }

    /**
     * Removes the first element from stack and returns it
     */
    pop() {
        return this.stack.shift();
    }
}

module.exports = Stack;