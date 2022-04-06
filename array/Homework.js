const a = [];
let g = (parseInt(prompt()));
for (let i = 0; i < g; i++) {
    a[i] = [];
    for (let j = 0; j < g; j++) {
        a[i][j] = 1;
    }
}

let o = 0;

/*for (let i = 0; i < 3; i++) {
    let f = g - i;
    o = o + 1;
    for (let j = o; j < (f - 1); j++) {
        a[i][j] = 3;
    }
}
let p = 0;
let l = g - 1;
for (let i = 0; i < 3; i++) {
    l = l - 1.
    p = p + 1;
    for (let j = p; j < (l + 1); j++) {
        a[j][i] = 2;
    }
}*/
//let m = g;
//let n = g - 1;
let p = 0;
let n = Math.floor(g/2);
for (let i = 4; i > (g-n); i--) {
 p = p +1;
    for (let j = g; j > p; j--) {
        a[j][i] = 4;
    }
}

console.log(a);








console.log(a);