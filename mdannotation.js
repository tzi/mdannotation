module.exports = function(annotation, cb) {
    return function(tree) {
        return tree.map(function(node) {
            if (Array.isArray(node.content) && node.content.length) {
                const head = node.content[0];
                if (typeof head == 'string') {
                    if (new RegExp(`^@${annotation}`).test(head)) {
                        const param = head.substr(annotation.length + 2);
                        node = cb(node, param);
                    }
                }
            }
            return node;
        });
    }
};