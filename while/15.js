var P = parseFloat(prompt());

let K = 1000;
P=(1000/100)*P;
let R = 0;
while(K<=1100){
K= K+P;
R++;
}
console.log(R);
console.log(K);
