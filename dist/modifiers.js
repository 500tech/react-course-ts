"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function mergeInto(main, factory) {
    return __assign(__assign({}, main), factory(main));
}
var person = {
    name: "Foo",
    age: 35
};
var personAfterBirthday = mergeInto(person, function (person) {
    return {
        age: person.age + 1,
    };
});
