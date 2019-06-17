"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// explicit notation
function add(x, y) {
    return x + y;
}
exports.add = add;
// type inference
function getStringLength(x) {
    return x.length;
}
exports.getStringLength = getStringLength;
