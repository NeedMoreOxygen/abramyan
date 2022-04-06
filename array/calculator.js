let g = prompt("Нажмите S если хотите начать работу с калькулятором! или если закончить нажмите E");
var k = 1;
if (g === "s") {
    while (g != "e") {
        const a = parseInt(prompt("Ведите первое значение! "));
        const c = prompt("Какую операцию вы хотите выполнить ");
        let b;
        if (c != "!") {
            b = parseInt(prompt("Ведите второе значение! "));
        }
        switch (c) {
            case "^":
                k = a**b;
                break;
            case "!":
                for (let i = 1; i <= a; i++) {
                    k *= i;
                }
                break;
            case "+":
                k = a + b;
                break;
            case "-":
                k = a - b;
                break;
            case "*":
                k = a * b;
                break;
            case "/":
                k = a / b;
                break;
            default:
                k = ("Операция веден неправельно!");
        }
        g = prompt("Ответ = " + k + "                                              Если хотите закончить нажмите E если нет то пробел");
    }
}







