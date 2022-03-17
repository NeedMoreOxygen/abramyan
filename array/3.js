let c = prompt();



var a = [];
 a = Array.from(c);
//console.log(a);
let g,h,f;
for ( let i = 0;i < a.length;i++){
g = a[i];
h = a[i+1];
    g = parseInt(g);
    h = parseInt(h);
if (g%2>0 && h%2>0){
    let r = a[i];
   
a[i]=r+":";
}

}
//console.log(a)

let o = [];

for ( let i = 0; i <a.length;i++){
o += a[i];

}
console.log(o);






















/*
let i = 0;
while(i<c){
let t = c%10;
a[i] =4



}

let u = [];


u[1]=  + ":";
console.log(u[1]);*/