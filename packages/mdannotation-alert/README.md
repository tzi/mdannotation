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