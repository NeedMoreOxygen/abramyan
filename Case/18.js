const N = parseInt(prompt());

let a = parseInt(N % 10);
let b = parseInt((N - a) % 100);
let c = parseInt((N - (a + b)) / 100);
let g = parseInt(N - (c * 100));
b = b / 10;
if (100 <= N && N <= 999) {
    switch (c) {
        case 1: console.log("сто"); break;
        case 2: console.log("двести"); break;
        case 3: console.log("триста"); break;
        case 4: console.log("четыреста"); break;
        case 5: console.log("пятьсот"); break;
        case 6: console.log("шестьсот"); break;
        case 7: console.log("семьсот"); break;
        case 8: console.log("восемьсот"); break;
        case 9: console.log("девятьсот"); break;
    }
    if (9 <= g && g < 20) {
        switch (g) {
            case 10: console.log("десять"); break;
            case 11: console.log("одинадцать"); break;
            case 12: console.log("двенадцать"); break;
            case 13: console.log("тринадцать"); break;
            case 14: console.log("четырнадцать"); break;
            case 15: console.log("пятьнадцать"); break;
            case 16: console.log("шестьнадцать"); break;
            case 17: console.log("семнадцть"); break;
            case 18: console.log("восемнадцать"); break;
            case 19: console.log("девятьнадцать"); break;
        }
    }


    if (b * 10 > 20) {
        switch (b) {
            case 2: console.log("двадцать"); break;
            case 3: console.log("тридцать"); break;
            case 4: console.log("сорок"); break;
            case 5: console.log("пятьдесят"); break;
            case 6: console.log("шестьдесят"); break;
            case 7: console.log("семьдесят"); break;
            case 8: console.log("восемьдесят"); break;
            case 9: console.log("девяноста"); break;
        }
        switch (a) {
            case 1: console.log("один"); break;
            case 2: console.log("два"); break;
            case 3: console.log("три"); break;
            case 4: console.log("четыре"); break;
            case 5: console.log("пять"); break;
            case 6: console.log("шесть"); break;
            case 7: console.log("семь"); break;
            case 8: console.log("восемь"); break;
            case 9: console.log("девять"); break;
        }
    }
}
