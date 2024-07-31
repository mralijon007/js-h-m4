//task1
//-----------------------------------
// Task1
// function name(n) {
//     let a = 0
//     for(let key in n){
//         n[key] = n[key]
//         cnt++
//     }
//     return a
// }
// console.log(name({ a: "idiot", b: "idiot", c: "idiot" }));
// console.log(name({ a: "moron", b: "scumbag", c:"moron", d: "dirtbag"}));


// Task2
// function name(n){
//     let a = {
//         1: "circle",
//         2: "semi-circle",
//         3: "triangle",
//         4: "square",
//         5: "pentagon",
//         6: "hexagon",
//         7: "heptagon",
//         8: "octagon",
//         9: "nonagon",
//         10: "decagone"
//     }
//     return a[n]
// }
// console.log(name(3));


// Task3
// function name(n){
//     return n >= k.min && n <= k.max
// }
// console.log(name(4, { min: 0, max: 5 }));


// Task4
// function name(n){
//     let k = Object.values(n)
//     return k.join(' ') +' '+ n[2] 
// }
// console.log(name({1: "Mommy", 2: "please", 3: "help"}));


// Task5
// function name(n,key){
//     for(let keys in n){
//         if(n[keys] == n[key]) return true
//     }
//     return false
// }
// console.log(name({ craves: 'true', midnight: 'true', snack: 'true' }, "morning"));
// console.log(name({pot: 1, tot: 2, not: 3 }, "not"));


// Task6
// function name(n){
//     let a = Infinity
//     for(let key in n){
//         if(n[key] < a) a = n[key]
//     }
//     return a
// }
// console.log(name({"cyan": 23,"magenta": 12,"yellow": 10}));


// Task7
// function name(n){
//     for(let key in n){
//         return false
//     }
//     return true
// }
// console.log(name({a:1}));


// Task8
// function name(n,k){
//     let a = 0
//     for(let key in n){
//         a += n[key]
//     }
//     return a - 
// }
// console.log(name({ skate: 10, painting: 20 }, 19));


// Task9
// function name(n){
//     let a = 0
//     for(let key in n){
//         a += n[key].score
//     }
//     return a 
// }
// console.log(name([{ tile: "N", score: 1 }, { tile: "K", score: 5 },{ tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 },{ tile: "A", score: 1 }, { tile: "E", score: 1 }]));


// Task10
// function name(n,m,k)=>{
//     n[m] = k 
//     return n 
// }
// console.log(name({ piano: 500 }, "Brutus", 400));

//----------------------------------------------------
//task2 !!!
//---------------------------------------------------
  
//task5
// function name(n) {
//     let ans = []
//     for(let i = 0; i < a.lebgth; i++)
//     {
//         let sum = 0;
//         for(let j = 0; j < a[i].grades.length; j++)
//         {
//             sum += a[i].grades[j];
//         }
//         sum /= a[i].grades.length;
//         ans.push({name:a[i].name,grades:sum});
//     }
//     return ans;
// }
// console.log(name([{ name: "Alice", age: 22, grades: [90, 85, 88] }, { name: "Bob", age: 20, grades: [75, 92, 80] }, { name: "Charlie", age:21, grades: [88, 85, 90] },]));4

//task 7
// let f=(a,b)=>{
//     let ans={}; for(let i=0;i<a.length;i++) ans[a[i]]=b[i]; return ans;
// }
// console.log(f(["name", "age", "city"], ["Alice", 25, "New York"]));
