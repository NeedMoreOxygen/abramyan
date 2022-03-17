
const a= [];
for (let i = 0; i < 100; i++) {
    let c = Math.random() * 10000;
    c = Math.floor(c);
    if (!a.includes(c)){
        a.push(c);
    } else {
        i--;
    }
}
console.log(a);


let b = [];
b = a.slice(0,100);
console.log(b);