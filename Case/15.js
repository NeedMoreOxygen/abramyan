const N = parseInt(prompt());
let M = parseInt(prompt());


if (6 <= N && N <= 14) {
    switch (N) {
        case 6:
            console.log("шестерка ");
            break;
        case 7:
            console.log("семерка");
            break;
        case 8:
            console.log("восьмерка");
            break;
        case 9:
            console.log("девятка");
            break;
        case 10:
            console.log("десятка");
            break;
        case 11:
            console.log("Валет");
            break;
        case 12:
            console.log("Дама");
            break;
        case 13:
            console.log("Король");
            break;
        case 14:
            console.log("Туз");
            break;
        default:
            console.log("Значение ведены неправельно.");
            break;
    }
}
else {
    console.log("Значение ведены неправельно.")
}
if (1 <= M <= 4) {
    switch (M) {
        case 1:
            console.log("пики");
            break;
        case 2:
            console.log("трефы");
            break;
        case 3:
            console.log("бубны");
            break;
        case 4:
            console.log("червы");
            break;
            default:
                console.log("Значение ведены неправельно.");
                break; }
}
else {
    console.log("Значение ведены неправельно.")
}