Markdown Annotation
======

A collection of [posthtml](https://github.com/posthtml/posthtml) plugins to enable annotations in your Markdown.

Plugins
------

 * [mdannotation-addclass](https://github.com/tzi/mdannotation/tree/master/packages/mdannotation-addclass#readme): 
    to add classes to the next paragraph.
 * [mdannotation-embed](https://github.com/tzi/mdannotation/tree/master/packages/mdannotation-embed#readme): 
    to embed a video, a code playground, etc.

 
How to use it
------

To use an annotation plugin on Markdown content, you should first convert it with your favorite markdown converter.
Then you could process the html with posthtml.

```sh
npm i markdown --save 
npm i posthtml --save
```

```js
const markdown = require( "markdown" ).markdown;
const posthtml = require('posthtml');
const annotationPlugin = require('mdannotation-plugin');

const html = markdown.toHTML(md);
return posthtml()
		.use(annotationPlugin)
		.process(html)
		.then(function (result) {
				console.log(result.html);
		})
;
```
 

Run tests
------

We use [Lerna](https://lernajs.io/) to manage our monorepos.

```sh
# node modules loading
lerna bootstrap

# Run tests accross every packages
lerna run test
```