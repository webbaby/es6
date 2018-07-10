//数组的解构赋值，按对应关系进行赋值，成功
//也可以是嵌套数组
var [a,b,c]=[1,2,3];
console.log(a);
console.log(b);
console.log(c);
//不成功的
var [foo]=[];
console.log(foo);//解构不成功，输出为undefined
//var[bar,foo]=[1]; 不成功
let [x,y]=[1,2,3]
console.log(x);
console.log(y);