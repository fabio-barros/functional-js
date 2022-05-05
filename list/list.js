const pair = (value) => (next) => {
    return { value: value, next: next };
};

let fst = (p) => p.value;
let snd = (p) => p.next;

// console.log(fst(pair(2)(5)));
// console.log(scd(pair(2)(5)));

let xs = pair(1)(pair(2)(pair(3)(null)));

let head = fst;
let tail = snd;
// console.log(head(xs));
// console.log(tail(xs));

function listToArray(xs) {
    let result = [];

    while (xs !== null) {
        result.push(head(xs));

        xs = tail(xs);
    }
    return result;
}

function array2List(arrayLike) {
    let result = null;
    let xs = Array.from(arrayLike).reverse();
    for (let i = 0; i < xs.length; i++) {
        result = pair(xs[i])(result);
    }
    return result;
}

console.log(listToArray(xs));
console.log(array2List(listToArray(xs)));
