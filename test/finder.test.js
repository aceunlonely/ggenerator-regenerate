const finder = require('../ggr-finder')


var seedArray = [
    {
        "path":"3/demo01.txt",
        "rarea" : [
            { 
                "name" : "[head]",
                "startIndex" : 1,
                "endIndex": 1,
                "area" : "name"
            }
        ]
    },
    {
        "path":"2/1/demo01.txt",
        "rarea" : [
            { 
                "name" : "[head]1",
                "startIndex" : 2,
                "endIndex": 2,
                "area" : "name"
            }
        ]
    }
]


var seed = {
    "name" : "hello",
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

console.log(finder.testInner(seedArray,seed))