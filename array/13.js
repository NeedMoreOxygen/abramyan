const a = [1, 4, 9, 5, 7, 6, 3, 1, 4, 5, 8, 6, 3, 5, 1, 5, 9, 3, 2, 1, 6];
const b = [0, 2, 8, 9, 6, 1, 3, 6, 3, 9, 7, 5, 4, 6, 4, 4, 7, 3, 0, 6, 4];


var c = a.concat(b) ;
console.log(c);
for (let i = 0;i<c.length;i++ ){
for(let j =1;j<c.length;j++){
if(c[i] ===c[j] && c!=j){
    c.splice(j,1);
}
    
}


}
console.log(c);


/*for (let i = 0; i < a.length; i++) {

    for (let j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
            let c = a[i];
            c[i] = c;
        } else {

        }



    }
}*/