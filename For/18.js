let A = parseInt(prompt());
const N = parseInt(prompt());

let B = A-1;
A = A * -1;
for(let i = 2; i<=N; ++i ){
    B = B + A**i;
  
    }
    console.log(B);

