let A = parseInt(prompt());
let B = parseInt(prompt());

let C = 0;
if (A > B) {
    C = B;
    while (1<C) {
        if (A % C == 0) {
            console.log(C);
        }
        else {
            --C;
            while (B % C != 0) {
                --C;
            }
        }
    
    }
}
else {
    C = A;
    while (1<C) {
        if (B % C == 0) {
            console.log(C);
        }
        else {
            --C;
            while (A % C != 0) {
                --C;
            }
        }
    
    }
}

console.log(C);