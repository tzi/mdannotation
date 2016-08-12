module.exports = function(tree) {
    tree.match(/^@video /, function(node) {
        const url = node.substr(7);
        return {
            tag: 'iframe',
            attrs: {
                width: 560,
                height: 315,
                src: url,
                frameborder: 0,
                allowfullscreen: ''
            }
        };
    });
};