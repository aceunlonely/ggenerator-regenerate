const fs = require('fs')
const path = require('path')
const dig = require('../ggr-digger')

var rootPath = path.resolve(__dirname , '../sundry/source')

dig.dig(rootPath).then(seed => {
    //console.log(JSON.stringify(seed))
    seed.seeds.forEach(element => {
        console.log(element)
    });
})