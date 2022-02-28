let D = parseInt(prompt());

const A = parseInt(prompt());
let C = D;
let F = 1;
for (let i = 3; i <= A; i += 2) {
    F = Math.pow(D, i);
    for (let g = 1; g <= i; g++) {
       


        if (g % 2 === 0) {
            F = F /g;
        }
        else if (g ===i){
            F = F *g;
        }
        else{
            F = F *g;
        }
    }
        C = C + F;
        F=0;
    }
    console.log(C);