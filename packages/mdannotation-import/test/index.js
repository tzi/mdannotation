const assert = require('assert');
const annotationImport = require('../mdannotation-import');
const converter = require('mdannotation').createConverter(annotationImport);

describe('MdAnnotation import', function() {
    it('should import a separate html file', function() {
        const md = `@import test/notice.html`;
        return converter(md)
            .then(result => {
                assert.equal(result.tree.length, 1);
                assert.equal(result.tree[0].tag, 'div');
                assert.equal(result.tree[0].attrs.class, 'notice');
                assert.equal(result.tree[0].content.length, 1);
                assert.equal(result.tree[0].content[0], 'Lorem Ipsum');
            })
        ;
    });
});