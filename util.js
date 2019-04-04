



/**
 * 字符串并集 从右边开始并
 */
exports.stringRightIntersection = (str1,str2) => {
    var result = ''
    for(var i = 0 ; i<str1.length ; i++){
        if(i + 1  > str2.length){
            return result
        }
        //console.log(`str1[${str1.length - i-1}] :` + str1.substr(str1.length - i-1,1))
        //console.log(`str2[${str2.length - i-1}] :` + str2.substr(str2.length - i-1,1))
        if(str1.substr(str1.length - i-1,1) ===  str2.substr(str2.length - i-1,1)){
            result = str1.substr(str1.length - i-1,1) + result
        }else{
            return result
        }
    }
    return result
}