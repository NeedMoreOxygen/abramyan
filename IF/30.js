/**
 * Дано целое число, лежащее в диапазоне 1–999.
 * Вывести его строку-описание вида «четное двузначное число», «нечетное трехзначное число» и т. д.
 */

let g = parseInt(prompt());
if (g === 0) {
    console.log('Нулевое число.');
} else if (g > 999) {
    console.log('Значение является больше 999!');
} else {
    if (g > 0) {
        console.log('Положительное и ');
    } else {
        console.log('Отрицательное и ');
        g = Math.abs(g);
    }
    if (g < 10) {
        console.log('Однозначное');
    } else if (g < 100) {
        console.log('Дузначное');
    } else {
        console.log('Трехзначное');
    }
    if (g % 2 === 0) {
        console.log('Четное');
    } else {
        console.log('Нечетное');
    }
}
