const g = parseInt(prompt());

if(g===0){
    console.log("Нулевое число.");
}
else if (g>0){
    console.log("Положительное и ");
    if(g%2===0){
        console.log("Четное");
    }
    else{
        console.log("Нечетное")
    }
}
else{
    console.log("Отрицательное и ");
    if(g%2===0){
        console.log("Четное");
    }
    else{
        console.log("Нечетное")
    }
}