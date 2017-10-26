---
layout: post
title: You're up and running!
---

Next you can update your site name, avatar and other options using the _config.yml file in the root of your repository (shown below).

![_config.yml]({{ site.baseurl }}/images/config.png)

The easiest way to make your first post is to edit this one. Go into /_posts/ and update the Hello World markdown file. For more instructions head over to the [Jekyll Now repository](https://github.com/barryclark/jekyll-now) on GitHub.

# Trying out some extra styling

This is some text in a paragraph

## This is a header 2

- This should be an unordered list
- This is the second item

1. this should be an ordered list
2. this is the next item

This is some *emphasized text* and **strong** text.

Let's go ahead and get some Footnotes [^1] up in here

[^1]: The footnote



I assume this will generate a line break



> This is a block quote Let's make it a few lines log To see how it does

```html
---
layout: default
---

<div id="posts">
{% for post in site.posts %}
    <article>

    <h1><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h1>

    <div class="entry">
        {{ post.excerpt }}
    </div>

    <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read More</a>
    </article>
{% endfor %}
</div>
```

This is some `inline code` in a line.

This is an abbreviation for HTML.

*[HTML]: HyperText Markup Language