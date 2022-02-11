let x = parseInt(prompt());
let y = parseInt(prompt());

if(x>0 && y>0){
    console.log("Расположено в первой четверти.")
}
else if(x>0 && y<0){
    console.log("Расположено в четвертой четверти.")
}
else if(x<0 && y<0){
    console.log("Расположено в третьей четверти.")
}
else if(x<0 && y>0){
    console.log("Расположено во второй четверти.")
}
else {
    console.log("Расположено на ОСИ.")
}