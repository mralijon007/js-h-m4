// function sumOddTo(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i += 2) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumOddTo(5)); 
// console.log(sumOddTo(8));

// function f(a) {
//     let max = 0;
//     let f1=(a)=>{
//         if(max<a)
//         {
//             max=a;
//         }
//         console.log(max);
//     }
//     return f1;
// }
// let x = f ();
// x(2);
// x(6);
// x(3);

// function name(n) {
//     let ans = 0;
//     for(let i = n; i > 0; i= Math.floor(i/10))
//     {
//         ans+=i%10;
//     }
//     return ans;
// }
// console.log(name(1101));

// function name() {
//     let sum = 0;
//     return function(n) {
//         sum+=n;
//         return sum;
//     }
// }
// let ans = name();
// console.log(ans(3));
// console.log(ans(5));

// function name() {
//     let sum = 0,cnt = 0;
//     return function(n) {
//         sum+=n; cnt ++;
//         return sum/=cnt;
//     }
// }
// let ans = name ();
// console.log(ans(10));
// console.log(ans(15));

// function name(a){
//     let fn1 = 1;
//     let fn2 = 1;
//     let fn = 0;
//     for (let i = 3; i <= a; i++)
//     {
//         fn = fn1 + fn2;
//         fn1 = fn2;
//         fn2 = fn;
//     }
//     return fn;
// }
// console.log(name(6));

// function name(n) {
//     let cnt = 0, ans = 0;
//     for (let i=n; i>0;i=Math.floor(i/10))
//     {
//         cnt++;
//     }
//     for (let i=n; i>0;i=Math.floor(i/10)) {
//         ans+=Math.pow(i%10,cnt);
//     }
//     return ans==n;
// }
// console.log(name(153));
// console.log(name(123));
// console.log(name(370));

// function name(n,k) {
//     if(n%k==0)
//     {
//         return "true";
//     }
//     else 
//     {
//         return "false";
//     }
// }
// console.log(name(10,5));

// function name(n) {
//     return function(k)
//     {
//         return n%k==0;
//     }
// }
// let ans=name(3);
// console.log(ans(9));
