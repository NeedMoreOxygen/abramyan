let D = parseInt(prompt());
let M = parseInt(prompt());

M = M+1;
D++;
if(M==13){
    M = 1;
} 
if(D==32){
switch(M){
case 2:
    console.log("M = "+ M + " и D = 1");
case 4:
case 6:
case 9:
case 11:
    console.log("M = "+ M + " и D = 1");
default:
    console.log("M = "+ M + " и D = 1");

}}
else if(M == 3 && D == 29) {
    console.log("M = "+ M + " и D = 1");
    
}
else if (M==2 && (M%28)>0){
    const R = (M%28);
    console.log("M = "+ 3 + " и D = " + R);
}
else{
    console.log("M = "+ M + " и D = " + D);
    
}