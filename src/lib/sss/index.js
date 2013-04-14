// Copyright (c) 2013 SquarePoet, Inc.
// MIT Licensed. Enjoy!
// 
// TODO: Handle arguments to specify input dir, output dir, and shared dir.
exports.go = function() {
    var inputDir  = "in/";
    var outputDir = "out/";
    var sharedDir = "shared/";
    var filenames;
    var fs = require("fs");

    console.log("It works!");

    // Make sure the directories exist.
    if (fs.existsSync(inputDir)) {
        console.log("sss found " + inputDir);
        filenames = fs.readdirSync(inputDir);
    } else {
        console.log("sss cannot find " + inputDir);
    }

    return "OK";
};