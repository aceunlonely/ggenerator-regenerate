var util = require('../util')



var str1 = 'abcaaaaaaaaaaaaabcccd'
var str2 = 'aaaaccbc'
console.log('str1: ' + str1)
console.log('str2: ' + str2)
console.log('stringRightIntersection: ' + util.stringRightIntersection(str1,str2))