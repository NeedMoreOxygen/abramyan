let N = parseInt(prompt());
let F1 = 1;
let F2 = 1;
let F = 0;
let o = 2;

while (F < N){

F = F1 + F2;
++o;

F1 = F2;
F2 = F;}
console.log(o);
console.log(F);









