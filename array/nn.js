////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////Begin 21
{const x1 = prompt();
const y1 = prompt();
const x2 = prompt();
const y2 = prompt();
const x3 = prompt();
const y3 = prompt();
const A = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
const B = Math.sqrt(((x3 - x2) ** 2) + ((y3 - y2) ** 2));
const C = Math.sqrt(((x3 - x2) ** 2) + ((y3 - y2) ** 2));
const Ptr = A + B + C;
const p = Ptr / 2;
const S = Math.sqrt(p * (p - A) * (p - B) * (p - C));
console.log(Ptr);
console.log(S);}

////begin 1
{const a = parseInt(prompt());
const P = 4 * a;
console.log(P);}

////begin 6
{const a = 5;
const b = 5;
const c = 5;
const V = a * b * c;
const S = 2 * (a * b + b * c + c * a);
console.log(V);
console.log(S);}

////begin 29
{const A = parseInt(prompt());
const P = ((A / 180) * Math.PI);
console.log(P);}

////begin 27
{const A = parseInt(prompt());
const A2 = (A * A);
const A4 = (A2 * A2);
const A8 = (A4 * A4);
console.log(A2);
console.log(A4);
console.log(A8);}



////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////integer 14
{const A = parseInt(prompt());

let a = parseInt(A % 10);

let b = parseInt((A - a) % 100);

let c = parseInt((A - (a + b)) / 100);

console.log(((a * 100) + (b / 10) + c * 10));}

////integer 7
{const A = parseInt(prompt());

let a = parseInt(A%10);

let b = parseInt(A - a)/10 ;

console.log("сумма = " + (a+b));
console.log("произведение = " + (a*b));}

////integer 18
{const A = parseInt(prompt());

let a = (A%10000);
let b = Math.floor(a/1000);

console.log(b);}

////integer 26
{const A = parseInt(prompt());
let a = Math.floor((A+3)%7);
console.log(a);}

////integer 27
{const A = parseInt(prompt());
let a = Math.floor((A+7)%7);
console.log(a);}

////boolean 14
{const A = parseInt(prompt());
const B = parseInt(prompt());
const C = parseInt(prompt());

const V = (A>-1 && B<-1 && C<-1)  ||  (A<-1 && B>-1 && C<-1)  ||  (A>-1 && B>-1 && C<-1);
console.log(V);}

////boolean 25
{const x = parseInt(prompt());
const y = parseInt(prompt());

const V = (x<0 && y>0);

console.log(V);
}
////boolean 1
{const A = parseInt(prompt());

const B = A>-1;

console.log(B);
}
////boolean 3
{const A = parseInt(prompt());
const C = A%2;
const B = C===0;

console.log(B);
}
////boolean 21
{const A = parseInt(prompt());

const a = parseInt(A % 10);

let b = parseInt((A - a) % 100);

const c = parseInt((A - (a+b))/100);

b = b/10;

const V = (c<b && b<a);


console.log(V);}
     

///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////if 2
{let a = parseInt(prompt());

if(a>-1){
a = a + 1;
console.log(a);}
else{
    a = a - 2;
    console.log(a);
}
}
////if 23
{let x = parseInt(prompt());
let y = parseInt(prompt());
let x1 = parseInt(prompt());
let y1 = parseInt(prompt());
let x2 = parseInt(prompt());
let y2 = parseInt(prompt());

if (x===x1){
    console.log("х = " + x2);
}
else if (x===x2){
    console.log("х = " + x1);
}
else{
    console.log("х = " + x);
}
if (y===y1){
    console.log("y = " + y2);
}
else if (y===y2){
    console.log("y = " + y1);
}
else{
    console.log("y = " + y);
}
}
////if 14
{let a = parseInt(prompt());
let b = parseInt(prompt());
let c = parseInt(prompt());

if ((a>b && b>c) ||(a<b && b<c)){
   console.log(a);
   console.log(c);
}
else if ((b>a && a>c)  || (b<a && a<c)){
console.log(b);
console.log(c);
}
else{
   console.log(a);
   console.log(b);
}
}
////if 5
{let a = parseInt(prompt());
let b = parseInt(prompt());
let c = parseInt(prompt());

if (a > -1 && b > -1 && c > -1){
    console.log("Положительных = 3");
    console.log("Отрицательных = 0")
}
else if (a > -1 && b > -1 && c < -1  ||  a > -1 && b < -1 && c > -1  ||  a < -1 && b > -1 && c > -1){

    console.log("Положительных = 2");
    console.log("Отрицательных = 1")
}
else if (a > -1 && b < -1 && c < -1  ||  a < -1 && b < -1 && c > -1  ||  a < -1 && b > -1 && c < -1){
    console.log("Положительных = 1");
    console.log("Отрицательных = 2")
    }
else{
    console.log("Положительных = 0");
    console.log("Отрицательных = 3")
}
}
////if 26
{const x = parseInt(prompt());

if(x<=0){
    console.log(-x);

}
else if (0<x && x<2) {
    console.log(x*x);

}
else if (X>=2) {
    console.log(4);

}
}


////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////case 14
{const N = parseInt(prompt());
let V = parseInt(prompt());

switch(N){
case 1:
    console.log("А равно = " + V);
    console.log("R1 = " + V * Math.sqrt(2)/6);
    console.log("R2 = " + (V * Math.sqrt(2)/6)*2);
    console.log("S = " + (V * V) *Math.sqrt(3)/ 4);
    break;
case 2 :
    V = (V*6)/Math.sqrt(2);
    console.log("А равно = " +V);
    console.log("R1 = " + V*Math.sqrt(2)/6);
    console.log("R2 = " + (V*Math.sqrt(2)/6)*2);
    console.log("S = " + (V*V) *Math.sqrt(3)/ 4);
    break;
case 3:
    V=(V*6)/Math.sqrt(2)/2;
    console.log("А равно = " +V);
    console.log("R1 = " + V*Math.sqrt(2)/6);
    console.log("R2 = " + (V*Math.sqrt(2)/6)*2);
    console.log("S = " + (V*V) *Math.sqrt(3)/ 4);
    break;
case 4:
    V= Math.sqrt((V*4)/Math.sqrt(3));
    console.log("А равно = " +V);
    console.log("R1 = " + V*Math.sqrt(2)/6);
    console.log("R2 = " + (V*Math.sqrt(2)/6)*2);
    console.log("S = " + (V*V) *Math.sqrt(3)/ 4);
break;
default :
console.log("Значение ведены неправельно!");
break;


}
}
////case 5
{const n = parseInt(prompt("Ведите номер операции"));
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
}
////case 17
{const N = parseInt(prompt());

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
}
////case 16
{const N = parseInt(prompt());

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
}

////case 10
{var C = prompt();
let N = parseInt(prompt());

switch(C){
case 'С':
    switch(N){
        case 0:
            console.log("Юг");
            break;
        case 1:
            console.log("Восток");
            break;
        case -1:
            console.log("Запад");
            break;
        }
        break;
case 'Ю':
    switch(N){
        case 0:
            console.log("Север");
            break;
        case 1:
            console.log("Запад");

            break;
        case -1:
            console.log("Восток");
            break;
                
        }
        break;         
case 'З':
    switch(N){
        case 0:
            console.log("ВостокЮг");
            break;
        case 1:
            console.log("евер");
            break;
        case -1:
            console.log("Юг");
            break;
        }
        break;   
case 'В':
    switch(N){
        case 0:
            console.log("Запад");
            break;
        case 1:
            console.log("Юг");
            break;
        case -1:
            console.log("Север");
            break;
        }
        break;
default : {
    console.log("Значение ведены неправельно!");
    break;
}          
}
}







/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////for 10
{const A = parseInt(prompt());
let y = 1;
for (let i = 1; i <= A; i++) {
    y = y + 1 / i;
}
y = Math.floor(y);
console.log(y);
}
////for 22
{const D = parseInt(prompt());
const A = parseInt(prompt());

let B = 1;
let C = 1;
for (let i = 1; i <= A; ++i) {

    for (let c = 1; c <= i; ++c) {

        B = B * c;

    }

    C = C + (Math.pow(D, i) / B);
    B = 1;
}
console.log(C);
}
////for 5
{const A = parseInt(prompt());

for(let a = 0.1; a<=1; a+=0.1){

    console.log(a + " килограм конфет равно = " +  (A*a));

}
}
////for 27
{let D = parseInt(prompt());

const A = parseInt(prompt());
let C = D;
let F = 1;
for (let i = 3; i <= A; i += 2) {
    F = Math.pow(D, i);
    for (let g = 1; g <= i; g++) {
       


        if (g % 2 === 0) {
            F = F /g;
        }
        else if (g ===i){
            F = F *g;
        }
        else{
            F = F *g;
        }
    }
        C = C + F;
        F=0;
    }
    console.log(C);
}
////for 18
{let A = parseInt(prompt());
const N = parseInt(prompt());

let B = A - 1;
A = A * -1;
for (let i = 2; i <= N; ++i) {
    B = B + A ** i;

}
console.log(B);
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////while 6
{let N = parseInt(prompt());

let C = 1;

while(2<=N){
C *= N;
N -=2; 

}
console.log(C);}

////while 23

////while 10
{let N = parseInt(prompt());
let K = 1;

while(Math.pow(3,K) <=N){
K++;

}
K-=2;
console.log(K);}

////while 14
{let N = parseInt(prompt());
let K = 1;
let g =2;
while(K<=N){
K=K + (1/g);
g++;
}
console.log(g-2);
g--;
console.log(K - (1/g));
}
////while 21
{let N = parseInt(prompt());

let t = 1;

while(1<N){
t = Math.floor(N%10);
N/=10;

if(t%2>0){
    console.log("True");
}
}
console.log("False");

}
















