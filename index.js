// Task1
// let f=(a)=>{
//     for(let i=0; i<a.length; i++){
//         let cnt = 0;
//         for(j=0; j<a.length; j++){
//             if(j!=i && a[i] == a[j]){cnt++; break;}
//         }
//         if(cnt==0) return a[i]
//     }
// }
// console.log(f("swiss"));   


// Task2
// let f=(a)=>{
//     let str = a.split("");
//     for(let i=0; i<str.length; i++){
//         if(str[i] >= 'a' && str[i] <= 'z' || str[i] >= 'A' && str[i] <= 'Z'){
//             return false
//         }
//     }
//     return true
// }
// console.log(f("12345"));
// console.log(f("123a45"));     


// Task3
// let f=(a,num)=>{
//    if(a.length > num){
//     return a.slice(0, num)
//    }
//    else {
//     return a
//    }
// }
// console.log(f("hello world", 5));
// console.log(f("javascript", 4));


// Task4
// let f=(a)=>{
//     let ans = a[0] 
//     for(let i=1; i<a.length; i++){
//         if(a[i].toUpperCase() == a[i]) ans +="_"+a[i].toLowerCase();
//         else ans+=a[i]
//     }
//     return ans
// }
// console.log(f("helloWorld"));
// console.log(f("JavaScriptIsFun"));
     

// Task5
// let f=(a)=>{
//     let x = a.split(" "), ans=""
//     for(let i=0; i<x.length; i++){
//         let z = x[i][0].toUpperCase();
//         let h = x[i][x[i].length-1].toUpperCase();
//         ans += z+x[i].slice(1, x[i].length-1)+h+" ";
//     }
//     return ans 
// }
// console.log(f("hello world"));    


// Task6
// let f=(a)=>{
//     let ans1 = a.replaceAll("https://", '')
//     let ans2 = ans1.replaceAll("http://", '')
//     let ans3 = ans2.replaceAll("www.", '')
//     let ans4 = ans3.replaceAll("sub.", '')
//     let ans5 = ans4.replaceAll("/path", '')
//     return ans5
// }
// console.log(f("https://www.example.com/path"));   


// Task7
// let f=(a)=>{
//     let ans = ''
//     for(let i=0; i<a.length; i++){
//         if((a[i]>='a' && a[i]<='z') || (a[i]>='A' && a[i]<='Z') || (a[i]>='0' && a[i]<='9') || (a[i]==" ")) ans+=a[i]
//     }
//     return ans
// }
// console.log(f("hello@world!"));


// Task8
// let f=(a)=>{
//     let str = a.split("")
//     let ans = ''
//     for(let i=str.length-1; i>=0; i--){
//         ans += str[i]
//     }
//     return ans == a
// }
// console.log(f("madam"));
// console.log(f("hello"));


// Task9
// let f=(a)=>{
//     return a.split(" ").reverse().join(" ");
// }
// console.log(f("hello world"));


// Task10
// let f=(a)=>{
//     return a[a.length-1]+a.slice(1,a.length-1)+a[0]
// }
// console.log(f("hello"));


// Task11
// let f=(num)=>{
//     let str = num.toString();
//     let min = 9999999999999
//     for(let i=0; i<str.length; i++){
//         if(Number(str[i]) < min){
//             min = Number(str[i]);
//         }
//     }
//     return min
// }
// console.log(f(34268));
// console.log(f(3407622));


// Task12
// let f=(num)=>{
//     let str = num.toString();
//     let min = -9999999999999
//     for(let i=0; i<str.length; i++){
//         if(Number(str[i]) > min){
//             min = Number(str[i]);
//         }
//     }
//     return min
// }
// console.log(f(34268));
// console.log(f(3407622));


// Task13
// let f=(num1, num2)=>{
//     let ans = ''
//     for(let i=num1; i<=num2; i++){
//         ans+=i+"," 
//     }
//     return ans
// }
// console.log(f(1,3));


// Task15
// let f=(num1, num2, num3)=>{
//     let ans = (num1+num2+num3) + (num1-num2-num3) + (num1 * num2 *num3) + (num1 / num2/ num3) + (num1% num2 % num3)
//     return ans
// }
// console.log(f(1,2,3));   


// Task16
// let f=(a)=>{
//    let x = a.toString();
//    return x[Math.floor(x.length/2)]
// }
// console.log(f(12345));


// Task17
// function name(){
//     let cnt = 0
//     let f=(a,b)=>{
//         cnt++
//         if(cnt%5==0) return a%b
//         if(cnt%5==1) return a+b
//         if(cnt%5==2) return a-b
//         if(cnt%5==3) return a*b
//         else return a/b
//     }
//     return f
// }
// let ans = name();
// console.log(ans(1,2));
// console.log(ans(1,2));
// console.log(ans(1,2));
