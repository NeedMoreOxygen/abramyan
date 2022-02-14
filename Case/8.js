let D = parseInt(prompt());
let M = parseInt(prompt());

M = M-1;
D--;
if(M==0){
    M = 12;
} 
if(D==0){
switch(M){
case 2:
    console.log("M = "+ M + " и D = 28");
case 4:
case 6:
case 9:
case 11:
    console.log("M = "+ M + " и D = 28");
default:
    console.log("M = "+ M + " и D = 31");

}}
else{
    console.log("M = "+ M + " и D = " + D);
    
}