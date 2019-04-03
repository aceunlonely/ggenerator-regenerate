const config = require('./config.json')
const find = require('find')
const LiSAP = require('lisa.promise')(2)


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
                    "area" : "name"
                }
            ]
        }
        */
        find.file(new RegExp('^'+seed.name + '$'), rootPath, files => {
            
            console.log(files)
        })
        return 'aa'
    }, seed.seeds)
}