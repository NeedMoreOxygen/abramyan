let a = parseInt(prompt());
let b = parseInt(prompt());
let c = parseInt(prompt());
let d = parseInt(prompt());

if(a===b && b===d){
    console.log(3);}
else if(a===c && c===d){
    console.log(2);}
else if(c===b && b===d){
    console.log(1);
}
else if(a===b && b===c){
    console.log(4);
}    
else{
    console.log("Здесь несколько отличных чисел!!!")
}