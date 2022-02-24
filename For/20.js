const A = parseInt(prompt());

let B = 1;
let C = 0;
for ( let i =1; i<=A; i++){

    for (let c = 1; c<=i;c++){
    
    B = B*c;

}
C = C+B;
}
console.log(C);