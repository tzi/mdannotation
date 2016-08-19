const markdown = require('markdown').markdown;
const posthtml = require('posthtml');

module.exports = function createConverter(plugins) {
    const pluginList = Array.isArray(plugins) ? plugins : [plugins];
    
    return function(md) {
        const html = markdown.toHTML(md);
        return posthtml(pluginList)
            .process(html)
        ;
    }
};