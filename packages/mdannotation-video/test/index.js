const assert = require('assert');
const annotationVideo = require('../mdannotation-video');
const converter = require( "../../../src/converter" )(annotationVideo);

describe('MdAnnotation video', function() {
    it('should convert youtube video', function() {
        const md = `@video https://www.youtube.com/watch?v=dQw4w9WgXcQ`;
        return converter(md, function(tree) {
            assert.equal(tree.length, 1);
            assert.equal(tree[0].tag, 'iframe');
            assert.equal(tree[0].attrs.src, 'https://www.youtube.com/embed/dQw4w9WgXcQ');
        });
    });
});