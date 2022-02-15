const N = parseInt(prompt());
let V = parseInt(prompt());

switch (N){
case 1 :
    console.log("R = " + (V));
    console.log("D = " + (V*Math.sqrt(2)));
    console.log("L = " + (V*Math.sqrt(2))/2);
    console.log("S = " + ((V*Math.sqrt(2)*(V*Math.sqrt(2))/2)/2));
    break;
case 2 :
V = (V/Math.sqrt(2));
console.log("R = " + (V));
console.log("D = " + (V*Math.sqrt(2)));
console.log("L = " + (V*Math.sqrt(2))/2);
console.log("S = " + ((V*Math.sqrt(2)*(V*Math.sqrt(2))/2)/2));
    break;
case 3 :
V = (V*2/Math.sqrt(2));
console.log("R = " + (V));
console.log("D = " + (V*Math.sqrt(2)));
console.log("L = " + (V*Math.sqrt(2))/2);
console.log("S = " + ((V*Math.sqrt(2)*(V*Math.sqrt(2))/2)/2));
    break;
case 4 :
    V = (Math.sqrt(V)*2)/Math.sqrt(2);
console.log("R = " + (V));
console.log("D = " + (V*Math.sqrt(2)));
console.log("L = " + (V*Math.sqrt(2))/2);
console.log("S = " + ((V*Math.sqrt(2)*(V*Math.sqrt(2))/2)/2));
    break;
default :
console.log("Значение ведены неправельно!");
}








