let a = parseInt(prompt());
let b = parseInt(prompt());
let c = parseInt(prompt());

if ((a>b && b>c) ||(a<b && b<c)){
   console.log(a);
   console.log(c);
}
else if ((b>a && a>c)  || (b<a && a<c)){
console.log(b);
console.log(c);
}
else{
   console.log(a);
   console.log(b);
}