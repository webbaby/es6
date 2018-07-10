'use strict';
//let只在代码块内有效
/* {
    var a=10;
    let b=1;
} */
//console.log(a);
//console.log(b);这里会出错，b未定义
//在for循环中的用处
/* var a=[];
for(var i=0;i<10;i++){
    a[i]=function(){
        console.log(i);
    }
}
a[6](); *///输出10，每次循环，新的i值都会覆盖旧值
var a=[];
for(let i=0;i<10;i++){
    a[i]=function(){
        console.log(i);
    }
}
a[6]();//输出6
//暂时性死区，如果是x=y,y=2就会出错，因为在使用y的时候还未声明
function bar(x=2,y=x){
    console.log([x,y]);
}
bar();
//变量泄露为全局变量
var s='hello';
for(var i=0;i<s.length;i++){
    console.log(s[i]);
}
console.log(i);
const h=3;
