const sym = Symbol();

let obj = {
    [sym]: "value"
};
console.log(obj[sym])