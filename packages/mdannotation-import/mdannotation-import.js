const fs = require('fs');
const mdannotation = require('../../src/mdannotation');
const parser = require('posthtml-parser');

module.exports = mdannotation('import', function (node, [filePath]) {
    const html = fs.readFileSync(filePath, {encoding: 'utf-8'}).toString();
    node = parser(html)[0];
    
    return node;
});