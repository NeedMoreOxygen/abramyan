let a = parseInt(prompt());
let b = parseInt(prompt());
let c = parseInt(prompt());

if (a > -1 && b > -1 && c > -1){
    console.log("Положительных = 3");
    console.log("Отрицательных = 0")
}
else if (a > -1 && b > -1 && c < -1  ||  a > -1 && b < -1 && c > -1  ||  a < -1 && b > -1 && c > -1){

    console.log("Положительных = 2");
    console.log("Отрицательных = 1")
}
else if (a > -1 && b < -1 && c < -1  ||  a < -1 && b < -1 && c > -1  ||  a < -1 && b > -1 && c < -1){
    console.log("Положительных = 1");
    console.log("Отрицательных = 2")
    }
else{
    console.log("Положительных = 0");
    console.log("Отрицательных = 3")
}