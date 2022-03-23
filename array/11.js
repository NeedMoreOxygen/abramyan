const a = [1, 2, 1, 8, 1, 7, 6, 1, 4, 9, 4, 3, 5, 8, 9, 1, 3, 6, 5, 9, 2, 8, 9, 2];
const b = [];
/*for (let i =0; i<100;i++){
let c = Math.floor(Math.random()*100);
a[i] = c;}*/

for (let i = 0; i < a.length; i++) {
    b[i] = 0;
    for (let j = 1; j < a.length; j++) {

        if (a[i] === a[j]) {
            b[i] = b[i] + 1;
        }
    }
}
let r =0;
r = Math.max(...b);


console.log(r);

