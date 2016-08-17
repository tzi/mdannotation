const mdannotation = require('../../src/mdannotation');

module.exports = mdannotation('addClass', function (node, classNames) {
    node.attrs = node.attrs || {};
    node.attrs.class = classNames.join(' ');
    
    return node;
});