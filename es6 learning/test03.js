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
let [x,y]=[1,2,3]  //不完全解构，但是成功
console.log(x);//1
console.log(y);//2
//默认值
//在数组成员严格等于undefined的时候，默认值才会生效
var [foo=true]=[];//true
var [x1,y1='b']=['a'];//x1=a,y1=b
var [x2,y2='b']=['a',undefined];//x2=a,y2=b
var [x3=1]=[null];//输出null，因为null不等于undefind，默认值不生效
console.log([x1,y1,x2,y2,x3]);
//惰性求值
function f(){
    console.log('aaa');
}
let [x4=f()]=[1];//此时并不会执行f函数
//let [x4=f()]=[];//执行f，输出aaa

//对象的解构赋值
//变量必须与属性名同名
let obj={first:'hello',last:'world'};
let {first:F,last:l}=obj;
console.log(F);  //hello
console.log(l);  //world


//字符串的解构,可以对属性解构赋值
const [a1,b1,c1,d1,e1]='hello';
console.log(a1)//h
let {length:len}='hello';
console.log(len);//5


//数值和布尔值,只要等号右边不是对象，就会先将其转为对象
let {toString:s}=123;
console.log(s===Number.prototype.toString);


//函数参数的解构赋值
function add(m,n){
    return m+n;
}
var sum=add(2,1);
console.log(sum);
//默认值
function move ({x=0,y=0}={}){
    return [x,y];
}
move({x:3,y:8});//[3,8]
move({});//[0,0]解构失败，等于默认值


//解构赋值的用途
//用于交换变量的值[x,y]=[y,x];
//提取json数据
var jsonData={
    id:42,
    status:"OK",
    data:[867,5309]
}
let {id,status,data:number}=jsonData;
console.log(id,status,number);//42,OK,[867,5309]
//遍历map结构
var map=new Map();
map.set('first','hello');
map.set('second','world');
for (let [key,value] of map){
    console.log(key+'is'+value);
}