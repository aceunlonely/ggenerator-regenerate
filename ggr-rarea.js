// regenerate area helpers
const config = require('./config.json')


exports.extract = (content,options)=>{
    options = options || {}
    options.area_placeholder = options.area_placeholder || config.area_placeholder
    options.debug = options.debug || config.debug
    if(!content){
        if(options.debug)
            console.error('ggr.rarea.extract error @ content : content cannot be null')
        return null
    }

    const placeholderStart = options.area_placeholder + '.start['
    const placeholderEnd = options.area_placeholder + '.end'
    var tmpContent = content
    var areaMetaArray = []
    // recurse solve trim
    while (tmpContent.indexOf(placeholderStart) > -1
        && tmpContent.indexOf(placeholderEnd) > -1 ){
        var startIndex = tmpContent.indexOf(placeholderStart)
        var endIndex = tmpContent.indexOf(placeholderEnd)
        var startLineIndex = tmpContent.indexOf('\n',startIndex)
        var endLineIndex = tmpContent.substring(0,endIndex).lastIndexOf('\n')
        areaMetaArray.push({
            name : /\[.*\]/.exec(tmpContent.substring(startIndex,startLineIndex))[0],
            startIndex : startIndex,
            endIndex : endIndex,
            area : tmpContent.substring(startLineIndex + 1,endLineIndex)
        })
        tmpContent = tmpContent.substring(endIndex + 1)
        
    }
    if(areaMetaArray.length>0)
        return areaMetaArray
    if(options.debug)
        console.Error('ggr.rarea.extract error @ template :' + content)
    return null
}