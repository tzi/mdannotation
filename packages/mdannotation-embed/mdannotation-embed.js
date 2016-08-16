const url = require('url');
const querystring = require('querystring');
const mdannotation = require('../../src/mdannotation');

module.exports = mdannotation('embed', function (node, param) {
    const embedUrl = url.parse(param);
    if (embedUrl.hostname == 'www.youtube.com') {
        const id = querystring.parse(embedUrl.query).v;
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