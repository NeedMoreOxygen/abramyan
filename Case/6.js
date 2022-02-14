const n = parseInt(prompt("Ведите номер операции"));
const A = parseInt(prompt("ведите число А"));



switch (n){
    case 1:
        console.log(A + "Дециметр"  );
        console.log("Это будет " + (A/10) + "метр");
        break;
    case 2:
        console.log(A + "километр"  );
        console.log("Это будет " + (A*1000) + "метр");
        break;
    case 3:
        console.log(A + "метр"  );
        console.log("Это будет " + A + "метр");
        break;
    case 4:
        console.log(A + "миллиметр"  );
        console.log("Это будет " + (A/1000) + "метр");
        break;
    case 5:
        console.log(A +"сантиметр"  );
        console.log("Это будет " + (A/100) + "метр");
        break;
    default:
        console.log("Такая операция недоступна.");
}
