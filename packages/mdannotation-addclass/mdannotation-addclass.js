const plugin = require('mdannotation').plugin;

module.exports = plugin('addClass', function (node, classNames) {
    node.attrs = node.attrs || {};
    node.attrs.class = classNames.join(' ');
    
    return node;
});