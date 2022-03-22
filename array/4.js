const d = prompt();

var a = [];
a = Array.from(d);
for (let i = 0; i<a.length;i++){

    if(UPPER.includes(a[i])){
    a[i] = a[i].toUpperCase();
}
else {
    a[i] = a[i].toUpperCase() == 1;
}

}
console.log(a);