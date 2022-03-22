let a = parseInt(prompt());
let b = parseInt(prompt());

const c = [];
let d = (b -a)/4;
c[0] = a;
for ( let i = 1; i<d;i++){
a +=4;
    c[i] =a;
}
c[d+1] = b;
console.log(c);