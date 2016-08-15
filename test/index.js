#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var markdown = require( "markdown" ).markdown;
var posthtml = require('posthtml');
var annotationVideo = require('./../plugins/mdannotation-video');

// Read a file (relative path) with node
function readFile(fileName, cb) {
    var filePath = path.join(__dirname, fileName);
    fs.readFile(filePath, {encoding: 'utf-8'}, function (error, data) {
        if (error) {
            console.log(error);
            process.exit();
        }

        cb(data);
    });
}

readFile('page.md', function(md) {
    const html = markdown.toHTML(md);
    posthtml()
        .use(annotationVideo)
        .process(html)
        .then(function(result) {
            console.log(result.html);
        });
});