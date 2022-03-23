const a = [];
for (let i = 0;i<100; i++){
let c = Math.floor(Math.random()*100);
a[i] = c;
}
let r =0;

for(let i = 0;i<100;i++){
let c = a[i];
r = c**2 +r;
}
console.log(r);