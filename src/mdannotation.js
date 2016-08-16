module.exports = function(annotation, cb) {
    return function(tree) {
        return tree.match({tag: 'p'}, function(node) {
            if (Array.isArray(node.content) && node.content.length) {
                if (typeof node.content[0] == 'string') {
                    const head = node.content[0].split('\n')[0];
                    if (new RegExp(`^@${annotation}`).test(head)) {
                        const params = head.substr(annotation.length + 2).split(' ');
                        node.content[0] = node.content[0].split('\n').slice(1).join('\n');
                        node = cb(node, params);
                    }
                }
            }
            return node;
        });
    }
};