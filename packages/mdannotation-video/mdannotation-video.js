const url = require('url');
const querystring = require('querystring');
const mdannotation = require('../../src/mdannotation');

module.exports = mdannotation('video', function (node, param) {
    const videoUrl = url.parse(param);
    if (videoUrl.hostname == 'www.youtube.com') {
        const id = querystring.parse(videoUrl.query).v;
        return {
            tag: 'iframe',
            attrs: {
                width: 560,
                height: 315,
                src: `https://www.youtube.com/embed/${id}`,
                frameborder: 0,
                allowfullscreen: ''
            }
        };
    }
    
    return node;
});