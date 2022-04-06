let a = [1, 2, 3, -4, 7];
let b = [1, 2, 3, -5, 8];
let r = 0;
let f = []
for (let i = 0; i < a.length; i++) {
    let c = a[i];
    let d = b[i];
    if (c != d) {
        f[r] = c;
        f[r+1] = d;
        r+=2;

    }
}
console.log(b);