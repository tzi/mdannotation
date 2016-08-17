Markdown Annotation @import
======

Markdown annotation is a [posthtml](https://github.com/posthtml/posthtml) plugin 
to import an HTML file.


Quick start
------

```sh
npm i mdannotation-import --save 
```


Usage
------

Use the `@import` annotation directly in your Markdown

```md
@import notice.html
```

	/!\ Warning: only the first root element will be inserted

```html
<div class="notice>Lorem Ipsum</div>
```

