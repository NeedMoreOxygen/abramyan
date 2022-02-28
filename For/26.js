let D = parseInt(prompt());

const A = parseInt(prompt());
let C = D;
for ( let i = 3; i<=A; i+=2){

    C = C + Math.pow(D, i)/i;


}
console.log(C);