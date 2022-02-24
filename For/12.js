const A = parseInt(prompt());
let a = 1.1;
let b =1;
for (let i = 1; i <= A; ++i) {
b *= a;
a+=0.1;
}


    console.log(b);