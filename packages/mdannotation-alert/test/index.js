const assert = require('assert');
const annotationAlert = require('../mdannotation-alert');
const converter = require('mdannotation').createConverter(annotationAlert);

describe('MdAnnotation alert', function() {
    it('should create alert components', function() {
        const md = `@alert
Lorem Ipsum`;
        return converter(md)
            .then(result => {
                assert.equal(result.tree.length, 1);
                assert.equal(result.tree[0].tag, 'div');
                assert.equal(result.tree[0].attrs.class, 'md-alert');
                assert.equal(result.tree[0].content.length, 1);
                assert.equal(result.tree[0].content[0], 'Lorem Ipsum');
            })
        ;
    });
    
    it('should create alert components with custom level', function() {
        const md = `@alert warning
Lorem Ipsum`;
        return converter(md)
            .then(result => {
                assert.equal(result.tree[0].attrs.class, 'md-alert md-alert--warning');
            })
        ;
    });
});