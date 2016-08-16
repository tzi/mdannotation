Markdown Annotation @embed
======

Markdown annotation is a [posthtml](https://github.com/posthtml/posthtml) plugin to embed a video, a code playground, etc.

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