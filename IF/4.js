let a = parseInt(prompt());
let b = parseInt(prompt());
let c = parseInt(prompt());

if (a > -1 && b > -1 && c > -1){
    console.log("3");}
else if (a > -1 && b > -1 && c < -1  ||  a > -1 && b < -1 && c > -1  ||  a < -1 && b > -1 && c > -1){

    console.log("2");
}
else if (a > -1 && b < -1 && c < -1  ||  a < -1 && b < -1 && c > -1  ||  a < -1 && b > -1 && c < -1){

    console.log("1");
    }
else{
    console.log("0");

}