const A = parseInt(prompt());
const B = parseInt(prompt());
const C = parseInt(prompt());

const V = (A>-1 && B>-1 && C<-1)  ||  (A<-1 && B>-1 && C>-1)  ||  (A>-1 && B<-1 && C>-1);
console.log(V);