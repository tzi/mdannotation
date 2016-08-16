const assert = require('assert');
const annotationAlert = require('../mdannotation-alert');
const converter = require( "../../../src/converter" )(annotationAlert);

describe('MdAnnotation alert', function() {
    it('should create alert components', function() {
        const md = `@alert
Lorem Ipsum`;
        return converter(md, function(tree) {
            assert.equal(tree.length, 1);
            assert.equal(tree[0].tag, 'div');
            assert.equal(tree[0].attrs.className, 'md-alert');
            assert.equal(tree[0].content.length, 1);
            assert.equal(tree[0].content[0], 'Lorem Ipsum');
        });
    });
    
    it('should create alert components with custom level', function() {
        const md = `@alert warning
Lorem Ipsum`;
        return converter(md, function(tree) {
            assert.equal(tree[0].attrs.className, 'md-alert md-alert--warning');
        });
    });
});