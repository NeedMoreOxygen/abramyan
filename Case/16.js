const N = parseInt(prompt());

switch (Math.floor(N / 10)) {
    case 2:
        console.log("двадцать");
        break;
    case 3:
        console.log("тридцать");
        break;
    case 4:
        console.log("сорок");
        break;
    case 5:
        console.log("пятьдесят");
        break;
    case 6:
        console.log("шестьдесят");
        break;
    default:
        console.log("Значение ведены неправильно!")
        break;
}
switch (N % 10) {
    case 0:
        console.log("ый");
        break;
    case 1:
        console.log("один");
        break;
    case 2:
        console.log("два");
        break;
    case 3:
        console.log("три");
        break;
    case 4:
        console.log("четыре");
        break;
    case 5:
        console.log("пять");
        break;
    case 6:
        console.log("шесть");
        break;
    case 7:
        console.log("семь");
        break;
    case 8:
        console.log("восемь");
        break;
    case 9:
        console.log("девять");
        break;
    default:
        console.log("Значение ведены неправильно!")
        break;
}
switch (N % 10) {
    case 0:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
        console.log("ЛЕТ");
        break;

    case 1:
        console.log("ГОД");
        break;
    case 2:
    case 3:
    case 4:
        console.log("года");
        break;
    default:
            console.log("Значение ведены неправильно!")
            break;
}

