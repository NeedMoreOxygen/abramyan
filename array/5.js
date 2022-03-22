var a = [];

  //a.splice(1,4);
  //console.log(a);
  for ( let i = 0; i<100; i++){
let u = Math.random() * 10;
u = Math.floor(u);
a[i] = u;

  }
  
  
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
        if (a[i] === a[j]) {
            a.splice(j, 1);
            j--;
        }
    }
}
console.log(a);

