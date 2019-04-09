var util = require('../util')


console.log('test stringRightIntersection===========================================================')

var str1 = 'abcaaaaaaaaaaaaabcccd'
var str2 = 'aaaaccbc'
console.log('str1: ' + str1)
console.log('str2: ' + str2)
console.log('stringRightIntersection: ' + util.stringRightIntersection(str1,str2))


console.log('test arrayIntersectionCount===========================================================')

var array1 = [{name:"1",age:12},{name:"2",age:12},{name:"1",age:12},{name:"3",age:12}]
var array2 = [{name:"3",age:12},{name:"1",age:12},{name:"4",age:12},{name:"5",age:12}]

console.log('arrayIntersectionCount: ' + util.arrayIntersectionCount(array2,array1,(ele1,ele2)=>{
    return ele1.name === ele2.name
}))
