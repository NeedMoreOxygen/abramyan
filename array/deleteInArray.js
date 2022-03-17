/*var a = ['1','2','3','4','5','875287'];

const Intwo = Array.from(a, n => n * n);

console.log(Intwo);

/*console.log(a);
console.log(a.length);
console.log(a[a.length -1]);*/


//const a = new Array("Nico", "Gari", "John", "Farid");
//const A = ["Fredo", "Angu", "David"];
//const b = Array.of("Don", "Mali", "Jose");
/*const c = Array.from("Veronika Nate");

for( let i = 0; i<=c.length; i++){
    console.log(c[i]);
}
let i = 0;
while(i <= c.length){
    console.log(c[i]);
    i++;
}*/


/*console.log(b);
console.log(a);
console.log(A);*/





/*var pos = a.indexOf('2');
var choose = a.splice(pos, 2);
console.log(choose);*/



/*const a = [];
let len = 7;
for (let i = 0; i < len; i++) {
    a[i] = [];
    for (let j = 0; j < len; j++) {
        a[i][j] = j -1<i ? 1 : 0
    }
}

console.log(a);
console.log(a.length);*/



/*const b = [];
let leng = 7;
let idx = 1;
for (let i = 0; i < leng; i++) {
    b[i] = [];
    for (let j = 0; j < leng; j++) {
       if(j <=leng-idx){
           b[i][j] = 1;
       }else {
       b[i][j] = 0;}
    }
idx++;
}
console.log(b);*/


/*const c = [];
let lengt = 7;
let idxt = 1;
for (let i = 0; i < lengt; i++) {
    c[i] = [];
    for (let j = 0; j < lengt; j++) {
       if(j >=lengt-idxt){
           c[i][j] = 1;
       }else {
       c[i][j] = 0;}
    }
idxt++;
}
console.log(c);*/

////////////////////////////////////////////////////////////////////////////////homework

/*const a = [];
let c = 0;
for (let i = 0; i <= 50; i++) {
    c = Math.random() * 100;
    a[i] = Math.floor(c);
}
console.log(a);*/


/*const a = [];
for (let i = 0; i < 100; i++) {
    let c = Math.random() * 100;
    c = Math.floor(c);
    if (!a.includes(c)){
        a.push(c);
    } else {
        i--;
    }

}
console.log(a);
*/

/////////////////////////////////////////////////////////////////////////////////////Endee
/////////////////////////////////////////////////////////day1

/*const a = [];
for (let i = 0; i < 100; i++) {
    let c = Math.random() * 10000;
    c = Math.floor(c);
    if (!a.includes(c)){
        a.push(c);
    } else {
        i--;
    }

}
console.log(a);

let b =0;
let c =0;
for(let i = 1; i<100; i++){
if (a[b]<a[i]){
    b=i;
}
if (a[c]>a[i]){
    c=i;
}


}
console.log( a[b]);
console.log(b);

console.log(a[c]);
console.log(c);*/

//////////////////////////////////////////////////////day2












/*var f = Math.max(...a);
console.log(f);
console.log(a.indexOf(f));
var h = Math.min(...a);
console.log(h);
console.log(a.indexOf(h));*/




/*let l = [];
l = a.slice(50, 100);
console.log(l);

var n = Math.max(...l);
console.log(f);
console.log(l.indexOf(n));
var m = Math.min(...l);
console.log(h);
console.log(l.indexOf(m));*/




















/*const a = [];
for (let i = 0; i < 100; i++) {
    let c = Math.random() * 1000;
    c = Math.floor(c);
    if (!a.includes(c)) {
        a.push(c);
    } else {
        i--;
    }

}

for (let j = 0; j < 100; j++) {
    for (let k = 1; k < 100; k++) {
        if (a[j] < a[k]) {
            console.log(a);
        } else {
            b = a[k];
            a[k] = a[j];
            a[j] = b;
            j--;
        }
    }
}
console.log(a);*/








const a= [];
for (let i = 0; i < 100; i++) {
    let c = Math.random() * 10000;
    c = Math.floor(c);
    if (!a.includes(c)){
        a.push(c);
    } else {
        i--;
    }
}
console.log(a);


let b = [];
b = a.slice(0,100);
console.log(b);


const s =[];
for(let i = 0;i<100;i++){
s[i] = a[i];}
console.log(s);
















































//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array
///////https://learn.javascript.ru