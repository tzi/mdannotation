Markdown Annotation @embed
======

Markdown annotation is a [posthtml](https://github.com/posthtml/posthtml) plugin
to embed videos, code playgrounds, etc.

Supports: 
 * [YouTube videos](https://www.youtube.com)
 * [Dailymotion videos](http://www.dailymotion.com)
 * [Vimeo videos](http://vimeo.com)
 * [Codepen playground](http://codepen.io)


Quick start
------

```sh
npm i mdannotation-embed --save 
```


Usage
------

Use the `@embed` annotation directly in your Markdown

```md
@embed https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

```html
<div class="md-video">
	<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" [...] ></iframe>
</div>
```


Tips
------

To have a responsive 16:9 video, you should add the following CSS rules:

```css
.md-video {
	position: relative;
	display: block;
	height: 0;
	padding: 0;
	overflow: hidden;
	padding-bottom: 56.25%
}
.md-video > iframe {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
```