///////////////////////////////////////////////////////////////////// 
// Copyright (c) 2013 SquarePoet, Inc.
// MIT Licensed. Enjoy!
// Assumes files are indented with spaces. We don't like tabs. :-)
/////////////////////////////////////////////////////////////////////
var fs = require("fs");
var inputDir, outputDir, sharedDir;

var fileNameToContents = {
    
};

exports.run = function(inputDirArg, outputDirArg, sharedDirArg) {
    inputDir = inputDirArg || "in/";
    outputDir = outputDirArg || "out/";
    sharedDir = sharedDirArg || "shared/";

    // TODO: Make sure the directories end in /

    console.log("Creating your simple static site...");
    console.log("    input: " + inputDir);
    console.log("    out: " + outputDir);
    console.log("    shared: " + sharedDir);

    var fileNames;

    // Make sure the input directory exists.
    if (fs.existsSync(inputDir)) {
        fileNames = fs.readdirSync(inputDir);
    } else {
        console.log("sss cannot find input dir: " + inputDir);
        return;
    }

    // Make sure the output directory exists.
    if (!fs.existsSync(outputDir)) {
        console.log("sss cannot find output dir: " + outputDir);
        return;
    }
    

    // Read all input files
    while (fileNames.length > 0) {
        var fileName = fileNames.shift();
        
        // Ignore hidden files (e.g., .DS_Store)
        if (fileName.indexOf(".") == 0) { continue; }

        var inFile = inputDir + fileName;
        var outFile = outputDir + fileName;

        // If it's a directory, check to make sure the same directory exists in out/
        var stats = fs.statSync(inFile);
        if (stats.isDirectory()) {
            console.log(inFile + " is a directory.");

            // Make sure that the output directory exists
            if (!fs.existsSync(outFile)) {
                console.log("Creating " + outFile);
                fs.mkdirSync(outFile);
            }
            
            // Scan this directory and all the new files to our list of files.
            
            var filesInSubDirectory = fs.readdirSync(inFile);
            for (var i in filesInSubDirectory) {
                var f = fileName + "/" + filesInSubDirectory[i];
                console.log("\tAdding " + f);
                fileNames.push(f);
            }
        } else {
            parseFile(inFile, outFile);
        }
    }
};


var parseFile = function(inFile, outFile) {

    console.log("\nProcessing: " + inFile);
    
    var lines = fs.readFileSync(inFile).toString().split("\n");
    var numLines = lines.length;
    
    var outputLines = [];
    
    for (var i=0; i<numLines; i++) {
        var line = lines[i];
        var matches = line.match(/{{.*?}}/g);
        if (matches) {
            
            // If there is only one match, and it is equal to the entire line (ignoring whitespace), we'll need to do some special magic to preserve the indentation!
            var indentNumSpaces = 0;
            if (matches.length == 1 && 
                line.replace(matches[0], "").trim() == "") {
                indentNumSpaces = line.indexOf(matches[0]);
            }
            
            var modifiedLine = line;
            for (var j in matches) {
                var match = matches[j];
                var fileName = match.replace(/[{}]/g, '').trim();
                
                // TODO: Handle different file types. But for now, assume there is no extension and that it will be .html.
                
                if (fileName.indexOf(".") != -1) {
                    fileName = sharedDir + fileName; // Already has an extension.
                } else {
                    fileName = sharedDir + fileName + ".html"; // Assume HTML
                }
                
                if (!fileNameToContents[fileName]) {
                    console.log("Looking for " + fileName);
                    // Try to read in the file.
                    if (fs.existsSync(fileName)) {
                        fileNameToContents[fileName] = fs.readFileSync(fileName).toString();
                    } else {
                        console.log("Couldn't find " + fileName);
                    }
                }
                
                var contents = fileNameToContents[fileName];
                if (!contents) {
                    continue;
                }
                
                if (indentNumSpaces > 0) {
                    var spaces = Array(indentNumSpaces + 1).join(" ");
                    contents = contents.replace(/\n/g, "\n" + spaces); // Indent the following line.
                }
                
                modifiedLine = modifiedLine.replace(match, contents);
            }
            outputLines.push(modifiedLine);
        } else {
            outputLines.push(line);
        }
    }

    console.log("Writing: " + outFile);
    
    fs.writeFile(outFile, outputLines.join("\n"), function(err) {
        if (err) {
            console.log(err);
        }
    });
};