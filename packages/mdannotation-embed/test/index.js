const assert = require('assert');
const annotationEmbed = require('../mdannotation-embed');
const converter = require( "../../../src/converter" )(annotationEmbed);

describe('MdAnnotation embed', function() {
    it('should convert youtube video', function() {
        const md = `@embed https://www.youtube.com/watch?v=dQw4w9WgXcQ`;
        return converter(md, function(tree) {
            assert.equal(tree.length, 1);
            assert.equal(tree[0].tag, 'div');
            assert.equal(tree[0].attrs.className, 'md-video');
            assert.equal(tree[0].content.length, 1);
            assert.equal(tree[0].content[0].tag, 'iframe');
            assert.equal(tree[0].content[0].attrs.src, 'https://www.youtube.com/embed/dQw4w9WgXcQ');
        });
    });
});