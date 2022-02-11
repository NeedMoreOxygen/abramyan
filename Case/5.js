const n = parseInt(prompt("Ведите номер операции"));
const A = parseInt(prompt("ведите число А"));
const B = parseInt(prompt("ведите число В"));

if(B!=0){
switch (n){
    case 1:
        console.log("Сложение = " + (A+B));
        break;
    case 2:
        console.log("Вычетание = " + (A-B));
        break;
    case 3:
        console.log("Умножение = " + (A*B));
        break;
    case 4:
        console.log("Деление = " + (A/B));
        break;
    default:
        console.log("Такая операция недоступна.");
}}
else{
    console.log("Значение В не может быть равно 0!");
}