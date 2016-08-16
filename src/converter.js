const markdown = require( "markdown" ).markdown;
const posthtml = require('posthtml');

module.exports = function converter(plugins) {
    return function(md, cb) {
        const html = markdown.toHTML(md);
        return posthtml()
            .use(plugins)
            .process(html)
            .then(function (result) {
                cb(result.tree);
            })
        ;
    }
};