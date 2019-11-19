"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var Pet = /** @class */ (function () {
    function Pet(name) {
        this.name = name;
        this.age = 4;
    }
    Pet.prototype.getName = function () {
        return this.name;
    };
    return Pet;
}());
var p = new Pet("meow");
// const m = new Pet(4);
console.log(p.getName());
console.log(utils_1.add(3, 6));
