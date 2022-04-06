const a = [];

for (let i = 0; i < 100; i++) {
a[i] = i;
}
const b = [];
for(let i = a.length,c=0; i >0;i--,c++){
b[c] = a[i]; 
}

console.log(b);