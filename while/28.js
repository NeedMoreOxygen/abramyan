let N = parseInt(prompt());
let F1 = 0;
let F = 2   ;
let o = 2;

while (Math.abs(F - F1) <= N){
    F1 = F;
F = 2+ 1/F1;
++o;

}
console.log(o);
console.log(F);









