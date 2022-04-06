const a = [];

for (let i = 0; i < 7; i++) {
    a[i] = [];
    for (let j = 0; j < 7; j++) {
        a[i][j] = i === j || i === 7 - j - 1 ? 1 : 0;

    }

}
console.log(a.indexOf());

console.log(a);