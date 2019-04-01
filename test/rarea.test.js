var rarea = require('../ggr-rarea')

var content =`
|~~~~~~~|
////////////////////////hellohellogoodday.start[head]///////////////////////////////////  
                                              |       |
                                              |       | 
                                              |       | LiSA
////////////////////////hellohellogoodday.end/////////////////////////////////// 
                                              |       |
   
                                              //  .'  || hi
////////////////////////hellohellogoodday.start[feet]///////////////////////////////////
                                              |  |  | |
                                              (  | |  |
                                              |       |   hello
////////////////////////hellohellogoodday.end///////////////////////////////////
                                              |       |
`

console.log(rarea.extract(content))