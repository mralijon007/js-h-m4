//1
// function name(a,b,c,d) {
//     let sum = ( a * 100 ) + b;
//     let sum1 = (c * 100 ) + d;
//     let cnt = Math.floor(sum1 / sum);
//     if(cnt * sum1 >= 10000)
//     {
//         return "Ошибка: превышение стоимости";
//     }
//     else 
//     {
//         return cnt;
//     }
// }
// console.log(name(1,70,3,80));
// console.log(name(2,10,6,90));
// console.log(name(1,30,5,20));

//2
// function name(a,b,c) {
//   if (( a < b && b < c ) || ( a > b && b > c))
//   {
//     a = a * a;
//     b = b * b;
//     c = c * c;
//   }
//   else 
//   {
//     a = -a;
//     b = -b;
//     c = -c;
//   }
//   console.log( a , b , c);
// }
// name(3,-2,8);
// name(3,6,9);
// name(-1, 2, 3);

//3
// function name(a) {
//     let next = a;
//     let prev = a;
//     if( a % 2 == 0 )
//     {
//         next += 2;
//     }
//     else
//     {
//         next += 1;
//     }
//     if( a % 2 != 0)
//     {
//         prev -= 1;
//     }
//     else
//     {
//         prev -= 2;
//     }
//     return "next:" + next + "prev:" + prev ;
// }
// console.log(name(3));
// console.log(name(4));
// console.log(name(5));

//4
// function name(a) {
//    if ( a > 0)
//    {
//     a -= 2;
//    }
//    else if( a < 0)
//    {
//     a += 1;
//    }
//    else if(a==0)
//    {
//     a=10;
//    }
//    return a;
// }
// console.log(name(3));
// console.log(name(0));
// console.log(name(10));

//5
// function test(a,b){
//   let c = 1;
//   for (let i = 1; i < Math.max( a , b ); i++){
//           if( a % i == 0 && b % i == 0)
//             { 
//               c=i;
//             }
//   }
//   return a * b / c;  
// }
// console.log(test(4,6));
// console.log(test(3,8));
// console.log(test(2,6));

//6
// function name(a) {
//     let sum = 0;
//     if (a <= 1)
//     {
//         return false;
//     }
//     for (let i = 1; i <= a / 2; i++) {
//       if (a % i == 0) {
//         sum += i;
//       }
//     }
//     return sum == a;
//   }
  
//   console.log(name(28));
//   console.log(name(32));
//   console.log(name(496)); 

//7
// function name(a) {
//   for (let i = a; i > 0; i = Math.floor(i / 10)){
//     let c = i % 10;
//     for (let j=Math.floor(i/10);j>0;j=Math.floor(j/10)){
//       if(j%10==c)
//       {
//         return "false"
//       }
//     }
//   }
//   return "true"
// }
// console.log(name(1234));
// console.log(name(2211));
// console.log(name(4231));
//8

//9
// function name(a) {
//   let cnt = 1 ;
//   while(a > 1)
//   {
//     if(a % 2 == 1)
//     {
//       a = a * 3 + 1;
//     }
//     else
//     {
//       a = a / 2;
//     }
//     cnt++;
//   }
//   return cnt;
// }
// console.log(name(13));
// console.log(name(23));
// console.log(name(5));


//10
// function name(a) {
//   let b = 1;
//   for(let i = 1; i <= a; i++ )
//   {
//     b*=i;
//   }
//   let c=0; cnt=0;
//   for(let i = b; i > 0; i = Math.floor(i / 10 ))
//   {
//     cnt++;
//   }
//   for(let i = b; i > 0; i = Math.floor(i / 10 ))
//   {
//     c += (i % 10) * Math.pow(10,cnt);
//     cnt--;
//   }
//   c /= 10;
//   return c;
// }
// console.log(name(4));
// console.log(name(5));
// console.log(name(6));