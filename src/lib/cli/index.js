// Copyright (c) 2013 SquarePoet, Inc.
// MIT Licensed. Enjoy!
module.exports.main = function() {
    var inDir, outDir, sharedDir;
    var arguments = process.argv;
    
    if (arguments.length > 2) {
        inDir = arguments[2];
    }
    if (arguments.length > 3) {
        outDir = arguments[3];
    }
    if (arguments.length > 4) {
        sharedDir = arguments[4];
    }

    var sss = require("../sss");
    sss.run(inDir, outDir, sharedDir);
};
