const find = require('find')
const path = require('path')

exports.dig =(rootPath,options)=>{
    var files = find.fileSync(rootPath)

    if(files){
        files.forEach(ele=>{
            
        })
    }
    console.log(files)
}