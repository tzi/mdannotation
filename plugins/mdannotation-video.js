const mdannotation = require('../mdannotation');

module.exports = mdannotation('video', function (node, param) {
    return {
        tag: 'iframe',
        attrs: {
            width: 560,
            height: 315,
            src: param,
            frameborder: 0,
            allowfullscreen: ''
        }
    };
});