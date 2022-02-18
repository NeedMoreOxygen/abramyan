const A = parseInt(prompt());
let y = 0;

for (let i = 1; i <= A; i++) {
    y = y + ((y+i)**2) ;
    console.log(y);
}

/*y = Math.floor(y);
console.log(y);*/