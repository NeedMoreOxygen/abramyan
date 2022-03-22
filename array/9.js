let y = parseInt(prompt());
var a = [];
const n = [];
for (let i = 0; i < 100000; i++) {
    a[i] = i;
}
y = 100000 - y;
let j = 0;
for (let i = y; i < 100000; i++) {
    n[j] = a[i];
    j++;
}

console.log(n);












