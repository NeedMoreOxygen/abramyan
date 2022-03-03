let N = parseInt(prompt());

let d =1;
let t = 0;
while (1<N){
d= Math.floor(N%10);
N/=10;
t = (t + d)*10;
}
console.log(t/10);
