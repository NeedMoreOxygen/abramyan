const g = parseInt(prompt());

if(g%4===0){
    if(g%400===0){
        console.log("В этом году 366 дней.");
    }
    else if (g%100===0){
        console.log("В этом году 365 дней.");
    }
    else{
        console.log("В этом году 366 дней.")
    }

}
else{
    console.log("В этом году 365 дней.");
}