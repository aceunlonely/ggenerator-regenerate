const find = require('find')
const path = require('path')
const LiSAP = require('lisa.promise')(2)
const defaultConfig = require('./config.json')

exports.dig =(rootPath,options)=>{
    // init params
    options = options || {}
    LiSAP.queue(options.queue || defaultConfig.queue)

    //run
    var files = find.fileSync(rootPath)
    return LiSAP.assignBatch(ele=>{
        return {
            name: path.basename(ele),
            path: ele,
            rarea: []
        }
    }, files)
    .action()
    .then(seeds =>{
        return { seeds :seeds }
    })
}