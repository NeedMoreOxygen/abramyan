var C = prompt();
let N = parseInt(prompt());

switch(C){
case 'С':
    switch(N){
        case 0:
            console.log("Юг");
            break;
        case 1:
            console.log("Восток");
            break;
        case -1:
            console.log("Запад");
            break;
        }
        break;
case 'Ю':
    switch(N){
        case 0:
            console.log("Север");
            break;
        case 1:
            console.log("Запад");

            break;
        case -1:
            console.log("Восток");
            break;
                
        }
        break;         
case 'З':
    switch(N){
        case 0:
            console.log("ВостокЮг");
            break;
        case 1:
            console.log("евер");
            break;
        case -1:
            console.log("Юг");
            break;
        }
        break;   
case 'В':
    switch(N){
        case 0:
            console.log("Запад");
            break;
        case 1:
            console.log("Юг");
            break;
        case -1:
            console.log("Север");
            break;
        }
        break;
default : {
    console.log("Значение ведены неправельно!");
    break;
}          
}