let g = parseInt(prompt());

if (g === 0) {
    console.log('Нулевое число.');
} else if (g > 1000) {
    console.log('Значение является больше 1000!');
} else {
    if (g > 0) {
        console.log('Положительное и ');
    } else {
        g = Math.abs(g)
        console.log('Отрицательное и ');
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
