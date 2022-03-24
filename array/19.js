const a = [];
for (let i = 0; i < 100; i++) {
    let c = Math.random() * 100;
    c = Math.floor(c);
    if (!a.includes(c)) {
        a.push(c);
    } else {
        i--;
    }

}
l = a.indexOf(0);
var e = a.splice(l, 1);


console.table(a);




let r = 0;
let t = 1;
for (let i = 0; i < 99; i++) {
    r = r + a[i];
    t = t * a[i];


}
console.log(r);
console.log(t);


////////////////https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice