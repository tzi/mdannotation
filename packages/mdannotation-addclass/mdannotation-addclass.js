const createPlugin = require('mdannotation').createPlugin;

module.exports = createPlugin('addClass', function (node, classNames) {
    node.attrs = node.attrs || {};
    node.attrs.class = classNames.join(' ');
    
    return node;
});