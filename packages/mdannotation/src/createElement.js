const isObject = a => (!!a) && (a.constructor === Object); 

module.exports = function createElement() {
    if (arguments.length < 1) {
        throw new Error('createElement() must be called with at least one parameter');
    }
    const tag = arguments[0];
    if (typeof tag !== 'string') {
        throw new Error('First parameter of createElement() must be a string');
    }
    const attrs = (arguments.length > 1 && isObject(arguments[1])) ? arguments[1] : undefined;
    const content = (Array.isArray(arguments[arguments.length - 1])) ? arguments[arguments.length - 1] : undefined;
    return {
        tag,
        attrs,
        content
    };
};