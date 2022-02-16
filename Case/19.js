const N = parseInt(prompt());
const A = N % 1936;
const J = Math.floor((A % 60)/12);
console.log("год");

switch (J) {
    case 0: console.log("зеленый"); break;
    case 1: console.log("красный"); break;
    case 2: console.log("желтый"); break;
    case 3: console.log("белый"); break;
    case 4: console.log("черный"); break;
}

switch (A % 12) {
    case 0: console.log("крысы"); break;
    case 1: console.log("коровы"); break;
    case 2: console.log("тигра"); break;
    case 3: console.log("зайца"); break;
    case 4: console.log("дракона"); break;
    case 5: console.log("змеи"); break;
    case 6: console.log("лощади"); break;
    case 7: console.log("овцы"); break;
    case 8: console.log("обезьяны"); break;
    case 9: console.log("курицы"); break;
    case 10: console.log("собаки"); break;
    case 11: console.log("свиньи"); break;

}