const A = parseInt(prompt());
let y = 0;

for (let i = 1; i <= A; i++) {
    y = y + ((A + i) ** 2);
    console.log(y);
}


console.log(y);