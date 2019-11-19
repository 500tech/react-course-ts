"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// explicit notation
function add(x, y) {
    return x + y;
}
exports.add = add;
// type inference
function getStringLength(x) {
    if (Math.random() > 0.5) {
        return 0;
    }
    return x.length;
}
exports.getStringLength = getStringLength;
