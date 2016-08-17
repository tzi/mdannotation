const assert = require('assert');
const annotationImport = require('../mdannotation-import');
const converter = require( "../../../src/converter" )(annotationImport);

describe('MdAnnotation import', function() {
    it('should import a separate html file', function() {
        const md = `@import test/notice.html`;
        return converter(md, function(tree) {
            assert.equal(tree.length, 1);
            assert.equal(tree[0].tag, 'div');
            assert.equal(tree[0].attrs.class, 'notice');
            assert.equal(tree[0].content.length, 1);
            assert.equal(tree[0].content[0], 'Lorem Ipsum');
        });
    });
});