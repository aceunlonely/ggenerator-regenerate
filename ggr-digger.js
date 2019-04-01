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
            path: ele,
            rarea: rareaEngine.extract(fs.readFileSync(ele,{encoding :options.encoding}))
        }
    }, files)
    .action()
    .then(seeds =>{
        return { seeds :seeds.filter(value=>{return value ? true : false}) }
    })
}