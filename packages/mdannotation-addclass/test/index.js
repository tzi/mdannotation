const assert = require('assert');
const annotationAddClass = require('../mdannotation-addclass');
const converter = require('mdannotation').createConverter(annotationAddClass);

describe('MdAnnotation addClass', function() {
    it('should add the "subtitle" class names', function() {
        const md = `@addClass subtitle subtitle--long
Lorem Ipsum`;
        return converter(md)
            .then(result => {
                assert.equal(result.tree.length, 1);
                assert.equal(result.tree[0].tag, 'p');
                assert.equal(result.tree[0].attrs.class, 'subtitle subtitle--long');
                assert.equal(result.tree[0].content.length, 1);
                assert.equal(result.tree[0].content[0], 'Lorem Ipsum');
            })
        ;
    });
});