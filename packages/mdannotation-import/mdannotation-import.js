const fs = require('fs');
const plugin = require('mdannotation').plugin;
const parser = require('posthtml-parser');

module.exports = plugin('import', function (node, [filePath]) {
    const html = fs.readFileSync(filePath, {encoding: 'utf-8'}).toString();
    node = parser(html)[0];
    
    return node;
});