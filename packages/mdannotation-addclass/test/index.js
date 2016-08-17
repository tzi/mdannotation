const assert = require('assert');
const annotationAddClass = require('../mdannotation-addclass');
const converter = require( "../../../src/converter" )(annotationAddClass);

describe('MdAnnotation addClass', function() {
    it('should add the "subtitle" class names', function() {
        const md = `@addClass subtitle subtitle--long
Lorem Ipsum`;
        return converter(md, function(tree) {
            assert.equal(tree.length, 1);
            assert.equal(tree[0].tag, 'p');
            assert.equal(tree[0].attrs.class, 'subtitle subtitle--long');
            assert.equal(tree[0].content.length, 1);
            assert.equal(tree[0].content[0], 'Lorem Ipsum');
        });
    });
});