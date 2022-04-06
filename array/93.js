/*let a = ["world"];
a[1] = 3.14;
let i = 2;
a[i] = 3;
a[i + 1] = "hello";
console.log(a);*/
let a = [];
a[0.4] = 5;
a[0.5] = 6;
a[0.6] = 7;
a[-0.4] = 5;
a[-0.5] = 6;
a[-0.6] = 7;
a['1'] = 15;
let b = Array.from(a);
/*a[a[i]] = a[0];
let h = 5;
a[a[h]] = 456;
console.log(a);*/

console.log(a);
console.log(b);