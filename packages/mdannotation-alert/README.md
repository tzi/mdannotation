Markdown Annotation @alert
======

Markdown annotation is a [posthtml](https://github.com/posthtml/posthtml) plugin
to create alert components.


Quick start
------

```sh
npm i mdannotation-alert --save
```


Usage
------

Use the `@alert` annotation directly in your Markdown

```md
@alert warning
Lorem Ipsum
```

```html
<div class="md-alert md-alert--warning" role="alert">
	Lorem Ipsum
</div>
```


Tips
------

To have some nice alerts, you could add the following rules:

```css
.md-alert {
	padding: 0.5em 1em;
	margin-bottom: 1em;
	border: 1px solid transparent;
	border-radius: 5px;
}
.md-alert--warning {
	color: #8a6d3b;
	background-color: #fcf8e3;
	border-color: #faebcc;
}
.md-alert--info {
	color: #31708f;
	background-color: #d9edf7;
	border-color: #bce8f1;
}
```