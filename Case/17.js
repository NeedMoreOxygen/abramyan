const N = parseInt(prompt());

if (10 <= N && N <= 40) {
    if (9 <= N && N < 20) {
        switch (N) {
            case 10:
                console.log("десять");
                break;
            case 11:
                console.log("одинадцать");
                break;
            case 12:
                console.log("двенадцать");
                break;
            case 13:
                console.log("тринадцать");
                break;
            case 14:
                console.log("четырнадцать");
                break;
            case 15:
                console.log("пятьнадцать");
                break;
            case 16:
                console.log("шестьнадцать");
                break;
            case 17:
                console.log("семнадцть");
                break;
            case 18:
                console.log("восемнадцать");
                break;
            case 19:
                console.log("девятьнадцать");
                break;
            default:
                console.log("Значение ведены неправильно!");
                break;

        }
    }
    if (20 <= N && N <= 40) {
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
            default:
                console.log("Значение ведены неправильно!");
                break;
        }
        switch (N % 10) {
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
        }
    }
    console.log("учебных заданий.");

}
