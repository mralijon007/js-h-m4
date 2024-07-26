// T1
// function name(a){
//     return a.at(0)
// }
// console.log(name([1,2,3]));

// T2
// function name(...a){
//     let n = [...a]
//     return n
// }
// console.log(name(1,2));

// T3
// function name(a){
//     return a.reverse()
// }
// console.log(name([1,2,3,4]));

// T4
// function name(a){
//    return a.map((element)=>{
//        return element += 1
//     })
// }
// console.log(name([0,1,2,3]));


// T5
// function name(a){
//     return a.at(-1)
// }
// console.log(name([1,2,3]));

// T6
// function name(a){
//     return a.join("")
// }
// console.log(name([1,2,3,4,5,6]));


// T7
// function name(a,e){
//     return a.includes(e)
// }
// console.log(name([1, 2, 3, 4, 5], 3));

// T8
// function name(a,e){
//     return a.indexOf(e)
// }
// console.log(name(["hi", "edabit", "fgh", "abc"], "fgh"));

// T9
// lfunction name(a1,a2){
//     return a1.concat(a2)
// }
// console.log(f([1, 3, 5], [2, 6, 8]));

// T10
// function name(a){
//     return a.map(Number)
// }
// console.log(name(["9.4","4.2"]));
----------------------------------------------------------
// T1
// function name(a){
//     let cube = 0
//     a.forEach((element)=>{
//         cube += Math.pow(element, 3)
//     })
//     return cube
// }
// console.log(name([1, 5, 9]));

// T2
// function name(a){
//     a.forEach((element)=>{
//         Number(element)
//     })
//     return a.filter(Boolean)
// }
// console.log(name([0, 1, false, 2, "", 3]));

// T3    
// function name(...a){
//    return a.every(element => element)
// }
// console.log(name([true, true, true]));

// T4
// function name(a){
//     let sum = 0
//     for(let i=0; i<a.length; i+=2){
//         sum += a[i]
//     }
//     return sum * a[a.length-1]
// }
// console.log(name([2,3,4,5]));

// T5
// function name(a1,a2)>{
//     if(a1.length !== a2.length){
//         return false
//     }
//    for(let i=0; i<a1.length; i++){
//     if(a1[i] !== a2[i]){
//         return false
//     }
//    }
//    return true
// }
// console.log(name([2,3,4,5,2], [2,3,4,5]));

// T9
// function name(a){
//     let j = a.join("")
//     let as = (${j.substring(0,3)})${j.substring(3,6)}-${j.substring(6)}
//     return as
// }
// console.log(name([9,9,7,0,3,4,4,5,5]));


// T10
// function name(...a){
//     let s = 0
//     for(let arr of a){
//         s += arr.reduce((acc, cur)=> acc * cur , 1)
//     }
//     return s 
// }
// console.log(name([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
