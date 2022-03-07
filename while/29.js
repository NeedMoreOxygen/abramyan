let N = parseInt(prompt());
let F1 = 1;
let F2 = 2;
let F = 2;
let o = 2;

while (Math.abs(F - F1) >= N){
    
   
F = (F1 + 2 * F2)/3;

F1 = F2;
F2 = F;

++o;

}
console.log(o);
console.log(F2);
console.log(F);









