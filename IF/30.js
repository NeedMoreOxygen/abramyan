const g = parseInt(prompt());

if (g === 0) {
    console.log('Нулевое число.');
} else if (g > 1000) {
    console.log('Значение является больше 1000!');
} else {
    if (g > 0) {
        console.log('Положительное и ');
    } else {
        console.log('Отрицательное и ');
    }
    let a = g * -1;
    if (a < 10) {
        console.log('Однозначное');
    } else if (a < 100) {
        console.log('Дузначное');
    } else {
        console.log('Трехзначное');
    }
    if (a % 2 === 0) {
        console.log('Четное');
    } else {
        console.log('Нечетное');
    }
}
