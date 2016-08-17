const mdannotation = require('../../src/mdannotation');
const createElement = require('../../src/createElement');

module.exports = mdannotation('alert', function (node, [level]) {
    const className = level ? `md-alert md-alert--${level}` : 'md-alert';
    return createElement('div', {class: className, role: 'alert'}, node.content);
});