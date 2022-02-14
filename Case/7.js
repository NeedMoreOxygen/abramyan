const n = parseInt(prompt("Ведите номер операции"));
const A = parseInt(prompt("ведите число А"));



switch (n){
    case 1:
        console.log(A + "килограм"  );
        console.log("Это будет " + (A/10) + "килограм");
        break;
    case 2:
        console.log(A + "миллиграм"  );
        console.log("Это будет " + (A/1000000) + "килограм");
        break;
    case 3:
        console.log(A + "грамм"  );
        console.log("Это будет " + A/1000 + "килограм");
        break;
    case 4:
        console.log(A + "тонна"  );
        console.log("Это будет " + (A*1000) + "килограм");
        break;
    case 5:
        console.log(A +"центнер"  );
        console.log("Это будет " + (A/100) + "килограм");
        break;
    default:
        console.log("Такая операция недоступна.");
}
