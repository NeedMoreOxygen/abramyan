let N = parseInt(prompt());

let d =1;
let g=0;
let t =0;
while (1<N){
d= Math.floor(N%10);
N/=10;
t = t+d;
g++;
}
console.log(g);
console.log(t);
