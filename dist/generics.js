"use strict";
function first(pair) {
    return pair[0];
}
var v = first([3, '32']);
function get(o, key) {
    return o[key];
}
var obj = { hello: 'world' };
var user = get(obj, 'hello');
// user.length // error
console.log(user && user.length);
