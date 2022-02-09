let a = parseInt(prompt());
let b = parseInt(prompt());
let c = parseInt(prompt());

if ((a>b && b>c) ||(a<b && b<c)){
   console.log(b);
}
else if ((b>a && a>c)  || (b<a && a<c)){
console.log(a);
}
else{
   console.log(c);
}