const url = require('url');
const querystring = require('querystring');
const mdannotation = require('../../src/mdannotation');
const createElement = require('../../src/createElement');

const createVideo = (src) => {
    return createElement('div', {className: 'md-video'}, [
        createElement('iframe', {
            width: 560,
            height: 315,
            frameborder: 0,
            allowfullscreen: '',
            src
        })
    ]);
}

module.exports = mdannotation('embed', function (node, [param]) {
    const embedUrl = url.parse(param);
    if (embedUrl.hostname == 'www.youtube.com') {
        const id = querystring.parse(embedUrl.query).v;
        return createVideo(`https://www.youtube.com/embed/${id}`);
    }
    if (embedUrl.hostname == 'www.dailymotion.com') {
        const id = embedUrl.pathname.split('/')[2].split('_')[0];
        return createVideo(`//www.dailymotion.com/embed/video/${id}`);
    }
    if (embedUrl.hostname == 'vimeo.com') {
        const id = embedUrl.pathname.split('/')[1];
        return createVideo(`https://player.vimeo.com/video/${id}`);
    }
    
    return node;
});