const config = require('./config.json')
const find = require('find')
const LiSAP = require('lisa.promise')(2)
const path = require('path')
const util = require('./util')


const getMatchHoleInner = (ySeedArray,seed)=>{
    // get match data
    ySeedArray.forEach(ele=>{
        //compare path
        ele.nameMatchLength = util.stringRightIntersection(ele.path, seed.path).length
        //compare rarea
        ele.rareaMatchCount = util.arrayIntersectionCount(ele.rarea,seed.rarea,(a1,a2)=>{
            return a1.name === a2.name
        })
    })

    // get best match one
    ySeedArray.filter((value, index, array) => {
        return value.rareaMatchCount > 0
    })
    if(!ySeedArray) return null
    var sortedYSeedArray = ySeedArray.sort((a,b)=>{ return a.nameMatchLength > b.nameMatchLength })
    return {
        name : seed.name,
        path : sortedYSeedArray[0].path,
        rarea : sortedYSeedArray[0].rarea
    }
}

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
    return getMatchHoleInner(ySeedArray,seed)
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




exports.testInner = getMatchHoleInner