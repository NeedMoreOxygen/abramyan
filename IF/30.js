const g = parseInt(prompt());

if(g===0){
    console.log("Нулевое число.");
}
else if (g>0 && g<1000){
        console.log("Положительное и ");
    if(g<10){
            console.log("Однозначное");
        if(g%2===0){
            console.log("Четное");
    }
        else{
            console.log("Нечетное");
    }}
    if(g<100){
            console.log("Дузначное");
        if(g%2===0){
            console.log("Четное");
    }
        else{
            console.log("Нечетное");
    }}
    else{
            console.log("Трехзначное")
        if(g%2===0){
            console.log("Четное");
    }
        else{
            console.log("Нечетное");
    }}
}

else if (g<0 && g<1000){
        console.log("Отрицательное и ");
        let a = g* -1;
    if(a<10){
            console.log("Однозначное");
        if(a%2===0){
            console.log("Четное");
}
        else{
            console.log("Нечетное");
}}
    if(a<100){
            console.log("Дузначное");
        if(a%2===0){
            console.log("Четное");
}
        else{
            console.log("Нечетное");
}}
    else{
            console.log("Трехзначное");
         if(a%2===0){
            console.log("Четное");
}
        else{
            console.log("Нечетное");
}}}
else{
    console.log("Значение является больше 1000!");
}