const A = parseInt(prompt());
let y = 1;
for (let i = 1; i <= A; i++) {
    y = y + 1/i;
}
y = Math.floor(y);
console.log(y);