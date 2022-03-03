var P = parseFloat(prompt());

let K = 10;
let y =(10/100)*P;
let R = 0;
while(K<=200){
K= K+y;
y = (K/100)*P;
R++;
}
console.log(R);
console.log(K);
