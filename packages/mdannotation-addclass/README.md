Markdown Annotation @addClass
======

Markdown annotation is a [posthtml](https://github.com/posthtml/posthtml) plugin to add classes to the next paragraph.


Quick start
------

```sh
npm i mdannotation-addclass --save 
```


Usage
------

Use the `@addClass` annotation directly in your Markdown

```md
@addClass subtitle subtitle--long
Lorem Ipsum
```

```html
<p class="subtitle subtitle--long">
	Lorem Ipsum
</p>
```