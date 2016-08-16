const url = require('url');
const querystring = require('querystring');
const mdannotation = require('../../src/mdannotation');
const createElement = require('../../src/createElement');

module.exports = mdannotation('embed', function (node, param) {
    const embedUrl = url.parse(param);
    if (embedUrl.hostname == 'www.youtube.com') {
        const id = querystring.parse(embedUrl.query).v;
        return createElement('div', {
            className: 'md-video'
        }, [
            createElement('iframe', {
                width: 560,
                height: 315,
                src: `https://www.youtube.com/embed/${id}`,
                frameborder: 0,
                allowfullscreen: ''
            })
        ]);
    }
    
    return node;
});