// 实现Redux.compose 功能
const compose = function(){
  const args = [...arguments]
  return function(x){
    return args.reduceRight((res,cb)=> cb(res),x)
  }
}

const fn1 = function(x){
  return x + 1
}
const fn2 = function(x){
  return x * 2
}
let calculate = compose(fn1,fn2)
console.log(calculate(2))