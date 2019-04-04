const config = require('./config.json')
const find = require('find')
const LiSAP = require('lisa.promise')(2)
const path = require('path')


const getMatchHole = (files,seed,rootPath)=>{
    var ySeedArray = [] 
    for(var index=0;index<files.length;i++){
        var file = files[index]
        ySeedArray.push({
            // here is  relative path
            path:  path.relative(rootPath,file),
            rarea: rareaEngine.extract(fs.readFileSync(ele,{encoding :options.encoding}))
        })
    }
    //compare path
    
    //compare rarea
}

exports.find = (rootPath,seed,options)=>{
    options = options || {}
    options.area_placeholder = options.area_placeholder || config.area_placeholder
    options.debug = options.debug || config.debug
    //check param
    if(!seed || !seed.seeds){
        if(options.debug)
            console.error('ggr.finder.find error @ param : seed cannot be null')
        return null
    }
    return LiSAP.assignBatch(seed=>{
        /*
        {
            "name":"demo01.txt",
            "path":"1/demo01.txt",
            "rarea" : [
                { 
                    "name" : "[head]",
                    "startIndex" : 24,
                    "endIndex": 328,
                    "area" : "namexx"
                }
            ]
        }
        */
       return new Promise((r,j)=>{
            find.file(new RegExp('^'+seed.name + '$'), rootPath, files => {
                if(files.length == 0){
                    if(options.debug){
                        console.debug('ggr.finder.find debug @ findFile : cant find file :' + seed.name)
                    }
                    r()
                }else{
                    r(getMatchHole(files,seed,rootPath))
                }
            })
       })

    }, seed.seeds)
}