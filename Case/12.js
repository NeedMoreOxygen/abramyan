const N = parseInt(prompt());
let V = parseInt(prompt());

switch (N){
case 1 :
    console.log("R = " + (V));
    console.log("D = " + (2*V));
    console.log("L = " + (2*Math.PI*V));
    console.log("S = " + (Math.PI*(V*V)));
    break;
case 2 :
V = V/2;
    console.log("R = " + (V));
    console.log("D = " + (2*V));
    console.log("L = " + (2*Math.PI*V));
    console.log("S = " + (Math.PI*(V*V)));
    break;
case 3 :
V = V/(2*Math.PI);
    console.log("R = " + (V));
    console.log("D = " + (2*V));
    console.log("L = " + (2*Math.PI*V));
    console.log("S = " + (Math.PI*(V*V)));
    break;
case 4 :
V = Math.sqrt(V/Math.PI);
    console.log("R = " + (V));
    console.log("D = " + (2*V));
    console.log("L = " + (2*Math.PI*V));
    console.log("S = " + (Math.PI*(V*V)));
    break;
default :
console.log("Значение ведены неправельно!");
}
