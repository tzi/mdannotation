const assert = require('assert');
const annotationEmbed = require('../mdannotation-embed');
const converter = require( "../../../src/converter" )(annotationEmbed);

describe('MdAnnotation embed', function() {
    it('should convert youtube video', function() {
        const md = `@embed https://www.youtube.com/watch?v=dQw4w9WgXcQ`;
        return converter(md, function(tree) {
            assert.equal(tree.length, 1);
            assert.equal(tree[0].tag, 'div');
            assert.equal(tree[0].attrs.class, 'md-video');

            assert.equal(tree[0].content.length, 1);
            assert.equal(tree[0].content[0].tag, 'iframe');
            assert.equal(tree[0].content[0].attrs.src, 'https://www.youtube.com/embed/dQw4w9WgXcQ');
        });
    });
    
    it('should convert dailymotion video', function() {
        const md = `@embed http://www.dailymotion.com/video/x5ykzv_rick-roll_music`;
        return converter(md, function(tree) {
            assert.equal(tree.length, 1);
            assert.equal(tree[0].tag, 'div');
            assert.equal(tree[0].attrs.class, 'md-video');
            
            assert.equal(tree[0].content.length, 1);
            assert.equal(tree[0].content[0].tag, 'iframe');
            assert.equal(tree[0].content[0].attrs.src, '//www.dailymotion.com/embed/video/x5ykzv');
        });
    });

    it('should convert vimeo video', function() {
        const md = `@embed https://vimeo.com/87031388`;
        return converter(md, function(tree) {
            assert.equal(tree.length, 1);
            assert.equal(tree[0].tag, 'div');
            assert.equal(tree[0].attrs.class, 'md-video');

            assert.equal(tree[0].content.length, 1);
            assert.equal(tree[0].content[0].tag, 'iframe');
            assert.equal(tree[0].content[0].attrs.src, 'https://player.vimeo.com/video/87031388');
        });
    });

    it('should convert codepen playground', function() {
        const md = `@embed http://codepen.io/mandymichael/pen/dXAoxX`;
        return converter(md, function(tree) {
            assert.equal(tree.length, 1);
            assert.equal(tree[0].tag, 'iframe');
            assert.equal(tree[0].attrs.src, '//codepen.io/mandymichael/embed/preview/dXAoxX/');
        });
    });
});