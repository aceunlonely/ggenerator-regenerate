const find = require('find')
const path = require('path')
const LiSAP = require('lisa.promise')(2)
const defaultConfig = require('./config.json')
const rareaEngine = require('./ggr-rarea')
const fs = require('fs')

exports.dig =(rootPath,options)=>{
    // init params
    options = options || {}
    LiSAP.queue(options.queue || defaultConfig.queue)
    options.encoding = options.encoding || defaultConfig.encoding
    //run
    var files = find.fileSync(rootPath)
    return LiSAP.assignBatch(ele=>{
        return {
            name: path.basename(ele),
            // here is  relative path
            path: path.relative(rootPath,ele),
            rarea: rareaEngine.extract(fs.readFileSync(ele,{encoding :options.encoding}))
        }
    }, files)
    .action()
    .then(seeds =>{
        // like demo.seed.json
        return { seeds :seeds.filter(value=>{return value ? true : false}) }
    })
}