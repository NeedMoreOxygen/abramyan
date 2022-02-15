var C = prompt();
let N = parseInt(prompt());
let N1 = parseInt(prompt());

const V = (N+N1);

switch (C) {
case 'С':
        switch (V) {
            case 0:
                console.log("Юг");
                break;
            case 1:
                console.log("Запад");
                break;
            case 3:
                console.log("Восток");
                break;
            case 2:
            case -2:
                console.log("Север");
                break;
            default:
                console.log("Север");
                break;
        }
break;

    case 'Ю':
        switch (V) {
            case 0:
                console.log("Север");
                break;
            case 1:
                console.log("Восток");
                break;
            case 3:
                console.log("Запад");
                break;
            case 2:
            case -2:
                console.log("Юг");
                break;
            default:
                console.log("Юг");
                break;
        }
break;


case 'З':
        switch (V) {
            case 0:
                console.log("Восток");
                break;
            case 1:
                console.log("Юг");
                break;
            case 3:
                console.log("Север");
                break;
            case 2:
            case -2:
                console.log("Запад");
                break;
            default:
                console.log("Запад");
                break;
        }
break;


case 'В':
        switch (V) {
            case 0:
                console.log("Запад");
                break;
            case 1:
                console.log("Север");
                break;
            case 3:
                console.log("ЮГ");
                break;
            case 2:
            case -2:
                console.log("Восток");
                break;
            default:
                console.log("Восток");
    break;
        }
break;



        default : 
        console.log("Значение ведены неправельно!");
        break;
    }







