const N = parseInt(prompt());
let V = parseInt(prompt());

switch(N){
case 1:
    console.log("А равно = " + V);
    console.log("R1 = " + V * Math.sqrt(2)/6);
    console.log("R2 = " + (V * Math.sqrt(2)/6)*2);
    console.log("S = " + (V * V) *Math.sqrt(3)/ 4);
    break;
case 2 :
    V = (V*6)/Math.sqrt(2);
    console.log("А равно = " +V);
    console.log("R1 = " + V*Math.sqrt(2)/6);
    console.log("R2 = " + (V*Math.sqrt(2)/6)*2);
    console.log("S = " + (V*V) *Math.sqrt(3)/ 4);
    break;
case 3:
    V=(V*6)/Math.sqrt(2)/2;
    console.log("А равно = " +V);
    console.log("R1 = " + V*Math.sqrt(2)/6);
    console.log("R2 = " + (V*Math.sqrt(2)/6)*2);
    console.log("S = " + (V*V) *Math.sqrt(3)/ 4);
    break;
case 4:
    V= Math.sqrt((V*4)/Math.sqrt(3));
    console.log("А равно = " +V);
    console.log("R1 = " + V*Math.sqrt(2)/6);
    console.log("R2 = " + (V*Math.sqrt(2)/6)*2);
    console.log("S = " + (V*V) *Math.sqrt(3)/ 4);
break;
default :
console.log("Значение ведены неправельно!");
break;


}