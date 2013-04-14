// Copyright (c) 2013 SquarePoet, Inc.
// MIT Licensed. Enjoy!
module.exports.main = function() {
    console.log("Running sss...");

    process.argv.forEach(function (val, index, array) {
        console.log(index + ': ' + val);
    });

    var sss = require("../sss");
    sss.go();
};
