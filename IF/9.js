let a = parseInt(prompt());
let b = parseInt(prompt());

if(a<b){
    console.log("Переменная а = " + a);
    console.log("Переменная b = " + b);
}
else{
    console.log("Переменная a = " + b/*(a+b-a)*/);
    console.log("Переменная b = " + a/*(b+a-b)*/);
}