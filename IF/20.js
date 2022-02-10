let a = parseInt(prompt());
let b = parseInt(prompt());
let c = parseInt(prompt());

if (Math.abs(a-b)>Math.abs(a-c)) {
  
  
    console.log(c);
    console.log(Math.abs(a-c));
}
else{
    console.log(b);
    console.log(Math.abs(a-b));
}