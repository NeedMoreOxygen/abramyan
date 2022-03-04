let N = parseInt(prompt());

let t = 1;

while(1<N){
t = Math.floor(N%10);
N/=10;

if(t==2){
    console.log("True");
}
}
console.log("False");