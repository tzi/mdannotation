const fs = require('fs');
const createPlugin = require('mdannotation').createPlugin;
const parser = require('posthtml-parser');

module.exports = createPlugin('import', function (node, [filePath]) {
    const html = fs.readFileSync(filePath, {encoding: 'utf-8'}).toString();
    node = parser(html)[0];
    
    return node;
});