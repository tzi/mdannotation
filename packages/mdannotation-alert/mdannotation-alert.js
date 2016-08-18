const {plugin, createElement} = require('mdannotation');

module.exports = plugin('alert', function (node, [level]) {
    const className = level ? `md-alert md-alert--${level}` : 'md-alert';
    return createElement('div', {class: className, role: 'alert'}, node.content);
});