////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Begin 12
{const a = 10;
const b = 6;
const c = Math.sqrt(a**2+b**2);
const P = a + b + c ;
console.log (c);
console.log (P);
}
//Begin 39
{const A = parseInt(prompt());
const B = parseInt(prompt());
const C = parseInt(prompt());

let D = B ** 2 - 4 * A * C;

let x1 = (((-B)+ Math.sqrt(D))/(2*A));
let x2 = (((-B)- Math.sqrt(D))/(2*A));

console.log("x1 = " + x1);
console.log("x2 = " + x2);
}
//Begin 22
{const A = prompt() ;
const B = prompt() ;
const C = parseInt(B)+parseInt(A);
console.log("A = " + (C-A));
console.log("B = " + (C-B));

//Begin 4
const d = 5;

const L = Math.PI * d;
console.log (L);
}
//Begin 28
{const A = parseInt(prompt()) ;
const A2 = (A*A) ;
const A3 = (A2*A) ;
const A5 = (A3*A2);
const A10 = (A5*A5);
const A15 = (A10*A5);
console.log(A2);
console.log(A3);
console.log(A5);
console.log(A10);
console.log(A15);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Integer 4
{const A = parseInt(prompt());
const B = parseInt(prompt());
let a = A/B;
let b = Math.floor(a);

console.log(b);
}
//Integer 19
{const A = parseInt(prompt());


let b = Math.floor(A/60);

console.log(b);
}
//Integer 2
{const L = parseInt(prompt());
let a = L/1000;
let b = Math.floor(a);

console.log(b);
}
//Integer 15
{const A = parseInt(prompt());

let a = parseInt(A % 10);

let b = parseInt((A - a) % 100);

let c = parseInt((A - (a+b))/100);

console.log(a+(b*10)+(c*10));

}
//Integer 8
{const A = parseInt(prompt());

let a = parseInt(A % 10);

let b = parseInt(A - a) / 10;



console.log(a * 10 + b);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Boolean 9
{const A = parseInt(prompt());
const B = parseInt(prompt());

const V = (A%2)>0 || (B%2)>0;

console.log(V);
}
//Boolean 39
{const x = parseInt(prompt());
const y = parseInt(prompt());

const x1 = parseInt(prompt());
const y1 = parseInt(prompt());
const C = (x<9 && y<9);
const D = (x1<9 && y1<9);



const V = ( C && D && (((Math.abs(x-x1)>0 && Math.abs(y-y1)>0) || (Math.abs(x-x1)<=0 && Math.abs(y-y1)<=0)) ||
((Math.abs(x-x1)>0 && Math.abs(y-y1)>0) || (Math.abs(x-x1)<=0 && Math.abs(y-y1)<=0)) || (Math.abs(x-x1)==1 || Math.abs(y-y1)==1))



);

console.log(V);
}
//Boolean 5
{const A = parseInt(prompt());
const B = parseInt(prompt());
const C = A>=0 && B<-2;

console.log(C);
}
//Boolean 20
{const A = parseInt(prompt());
const B = parseInt(prompt());
const C = parseInt(prompt());

const V = (A !=B && B!=C && C!=A);

console.log(V);
}
//Boolean 15
{const A = parseInt(prompt());
const B = parseInt(prompt());
const C = parseInt(prompt());

const V = (A>-1 && B>-1 && C<-1)  ||  (A<-1 && B>-1 && C>-1)  ||  (A>-1 && B<-1 && C>-1);
console.log(V);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//If 18
{let a = parseInt(prompt());
let b = parseInt(prompt());
let c = parseInt(prompt());

if(a===b){
    console.log(3);}
else if(a===c){
    console.log(2);}
else if(c===b){
    console.log(1);
}
else{
    console.log("Здесь несколько отличных чисел!!!")
}
}   
//If 9
{let a = parseInt(prompt());
let b = parseInt(prompt());

if(a<b){
    console.log("Переменная а = " + a);
    console.log("Переменная b = " + b);
}
else{
    console.log("Переменная a = " + b/*(a+b-a)*/);
    console.log("Переменная b = " + a/*(b+a-b)*/);
}
}
//If 30
{const g = parseInt(prompt());

if(g===0){
    console.log("Нулевое число.");
}
else if (g>0 && g<1000){
        console.log("Положительное и ");
    if(g<10){
            console.log("Однозначное");
        if(g%2===0){
            console.log("Четное");
    }
        else{
            console.log("Нечетное");
    }}
    if(g<100){
            console.log("Дузначное");
        if(g%2===0){
            console.log("Четное");
    }
        else{
            console.log("Нечетное");
    }}
    else{
            console.log("Трехзначное")
        if(g%2===0){
            console.log("Четное");
    }
        else{
            console.log("Нечетное");
    }}
}

else if (g<0 && g<1000){
        console.log("Отрицательное и ");
        let a = g* -1;
    if(a<10){
            console.log("Однозначное");
        if(a%2===0){
            console.log("Четное");
}
        else{
            console.log("Нечетное");
}}
    if(a<100){
            console.log("Дузначное");
        if(a%2===0){
            console.log("Четное");
}
        else{
            console.log("Нечетное");
}}
    else{
            console.log("Трехзначное");
         if(a%2===0){
            console.log("Четное");
}
        else{
            console.log("Нечетное");
}}}
else{
    console.log("Значение является больше 1000!");
}
}

//If 21
{const x = parseInt(prompt());
const y = parseInt(prompt());

if(x==0 && y == 0){
    console.log(0);}
else if (x!=0){
    console.log(1);}
else if (y!=0){
    console.log(2);}
else{
    console.log(3);
    }

//If 12
let a = parseInt(prompt());
let b = parseInt(prompt());
let c = parseInt(prompt());

if (a>b && b>c){
   console.log(c);
}
else if (a<b && b<c){
console.log(a);
}
else{
   console.log(b);
}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//case 1
{const a = parseInt(prompt());

switch (a){
    case 1:
        console.log("Понидельник");
        break;
    case 2:
        console.log("Вторник");
        break;
    case 3:
        console.log("Среда");
        break;
    case 4:
        console.log("Четверг");
        break;
    case 5:
        console.log("Пятница");
        break;
    case 6:
        console.log("Суббота");
        break;
    case 7:
        console.log("Воскресенье");
        break;
    
    default:
        console.log("Значение больше 7.");
}
}
//case 2
{const a = parseInt(prompt());

switch (a){
    case 1:
        console.log("Плохо");
        break;
    case 2:
        console.log("Неудовретворительно");
        break;
    case 3:
        console.log("Удовретворительно");
        break;
    case 4:
        console.log("Хорошо");
        break;
    case 5:
        console.log("Отлично");
        break;
    default:
        console.log("Ошибка.");
}
}
//case 19
{const N = parseInt(prompt());
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
}
//case 12
{const N = parseInt(prompt());
let V = parseInt(prompt());

switch (N){
case 1 :
    console.log("R = " + (V));
    console.log("D = " + (2*V));
    console.log("L = " + (2*Math.PI*V));
    console.log("S = " + (Math.PI*(V*V)));
    break;
case 2 :
V = V/2;
    console.log("R = " + (V));
    console.log("D = " + (2*V));
    console.log("L = " + (2*Math.PI*V));
    console.log("S = " + (Math.PI*(V*V)));
    break;
case 3 :
V = V/(2*Math.PI);
    console.log("R = " + (V));
    console.log("D = " + (2*V));
    console.log("L = " + (2*Math.PI*V));
    console.log("S = " + (Math.PI*(V*V)));
    break;
case 4 :
V = Math.sqrt(V/Math.PI);
    console.log("R = " + (V));
    console.log("D = " + (2*V));
    console.log("L = " + (2*Math.PI*V));
    console.log("S = " + (Math.PI*(V*V)));
    break;
default :
console.log("Значение ведены неправельно!");
}
}

//case 14
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//For 36

{const K = parseInt(prompt());
let C = 0;
for(let t = 1; t<=N;t++){
    C = C+Math.pow(t, K);
}
console.log(C);
}
//For 39
{const A = parseInt(prompt());
const B = parseInt(prompt());

let C =A, D =1;
for (let t = A; t <= B ; t++){
    for (let g =1; g<=C; g++){
        console.log(C);
    }
    C++;
}
}
//For 32
{const A = parseInt(prompt());
let C = 1;
console.log("A0 = " + C);
for (let t = 1; t <= A; t++) {
    C = (C+1) / t;
    console.log("A" + t + " = " + C);
}
}
//For 17
{const A = parseInt(prompt());
const N = parseInt(prompt());

let B = A + 1;

for (let i = 2; i <= N; ++i) {
    B = B + A ** i;

}
console.log(B);
}
//For 11
{const A = parseInt(prompt());
let y = 0;

for (let i = 1; i <= A; i++) {
    y = y + ((A + i) ** 2);
    console.log(y);
}


console.log(y);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//While  28
{let N = parseInt(prompt());
let F1 = 0;
let F = 2   ;
let o = 2;

while (Math.abs(F - F1) >= N){
    F1 = F;
F = 2+ 1/F1;
++o;

}
console.log(o);
console.log(F);
}

//While 8
{let N = parseInt(prompt());
let K = 1;

while(Math.pow(K,2) <N){
K++;

}
K--;
console.log(K);
}
//While 26
{let N = parseInt(prompt());
let F1 = 1;
let F2 = 1;
let F = 0;


while (F < (N-1)){

F = F1 + F2;


F1 = F2;
F2 = F;}
console.log(F+F1);
console.log(F1);
}
//While 18
{let N = parseInt(prompt());

let d =1;
let g=0;
let t =0;
while (1<N){
d= Math.floor(N%10);
N/=10;
t = t+d;
g++;
}
console.log(g);
console.log(t);

}
//While 1
{const A = parseInt(prompt());
const B = parseInt(prompt());
let C = A;
while(C>B){
C=C-B;

}
console.log(C);
}





