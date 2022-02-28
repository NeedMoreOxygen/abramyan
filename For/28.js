let D = parseInt(prompt());

const A = parseInt(prompt());
let C = 1;
let F = 1;
for (let i = 1; i <= A; i ++) {
    F = Math.pow(D, i);
let y = i*2;

    for (let g = 1; g <= y; g++) {
       


        if (g % 2 >0 && g<=i) {
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