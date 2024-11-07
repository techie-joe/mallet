---
title: Demo Page
description: Demo page for a Jekyll theme.
permalink: demo
---

This is a demo page for **{{ site.title }}** - a Jekyll theme for building websites on GitHub. **{{ site.nickname }}** can help you build website easily. It has everything pre-configured to get you started right away. You can write contents in both Markdown and HTML. When you commit your code, **GitHub Pages** will build and publish your website from the content of your repository.
{: .bg-secondary.p-3.text-slategray.text-small }

<h1 id="_hero-title" class="hero">Write <span class="text-red">a big red</span> hero text</h1>

## Better control over contents

![Small image](https://picsum.photos/id/299/400/300){: .centered.float-sm-right.m-sm-4 width=400 height=300 }

When ever you wish to enlarge the first letter of a paragraph, use <code class="nowrap">big-first</code>.
To indent  a paragraph with an `indent`. Align paragraph using <code class="nowrap">text-justify</code>.
Include image with floats and margins.
{: .big-first.text-justify }

<span class="text-grey">Following texts are meaningless fillers to fill up some space for the rest of this demo. ... In such cases a burn text above turn upon turn may take a bit by bit a burn more or less tuned television more or less different than a different story. Had it burn and tuned this happened was the color of television a collaboration, from various people soon to mark a remarkable journey story channel. This happened to people various bit by bit.</span>
{: .indent.text-justify }

<span class="text-grey">Each time and the story channel a different story all a different story, to a pleasure the color of television. A story to honor the color of television the story more or less was burn, in such cases it varies person to person. This happened to the color of television as television different than a different story.</span>
{: .indent.text-justify }

&nbsp;  

## Style text &amp; color

Text can be written in **bold**, _italic_, ***both***, ~~strikethrough~~,
<abbr title="Abbreviation">abbr</abbr>,
<samp>samp</samp>,
`code`, or <mark>mark</mark>.

<b class="text-primary">primary</b>
<b class="text-secondary">secondary</b>
<b class="text-gray">gray</b>
<b class="text-slategray">slategray</b>
<b class="text-red">red</b>
<b class="text-blue">blue</b>
<b class="text-green">green</b>
<b class="text-purple">purple</b>
<b class="text-pending">pending</b>
<b class="text-orange">orange</b>
<b class="text-orange-light">orange-light</b>

## Text blocks

> You can write a bunch of text in a blockquote.
>
> > A blockquote can be nested too.
> 

<!-- This content will not appear in the rendered Markdown -->

Write texts in a container `box` with a background `bg-primary`.
{: .box.bg-primary.text-white.text-center }

... or use a `box` wtih `bg-secondary` container.
{: .box.bg-secondary.text-center }

## Collapsible blocks

<details>
<summary>Click me for details</summary>
<p class="m-3">You can hide some contents here.</p>
</details>

## Code blocks

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

```
Long, single-line `code blocks` should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

## Images big and small

Add full scale images, align them centered or float them left or right.

![Large image](https://picsum.photos/id/3/1024/368){: .width-full.centered }

> Images for this demo came from [picsum.photos](https://picsum.photos/) and [unsplash](https://unsplash.com)
{: .text-small }

***

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6


## List

###### Ordered

1. Item one
    1. Item a
        1. Item x
        1. Item y
    1. Item b
1. Item two


###### Unordered

- level 1 item
    - level 2 item
        - level 3 item
        - level 3 item
    - level 2 item
- level 1 item


###### Tasks

- [x] Completed task.
    - task item level 2
        - task item level 3
    - task item level 2
- [ ] Pending task.

## Definitions

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1970</dd>
</dl>

## Table

| Full table      | Status       | Notes      |
| :---------------- | :----------: | ---------: |
| good swedish fish | ok           | nice       |
| good and plenty   | out of stock | nice       |
| good `oreos`      | ok           | hmm        |
| good `zoute` drop | ok           | yumm       |
{: .full }

<table>
<tr><th colspan="3">Simple table</th></tr>
<tr><td>one</td><td>two</td><td>three</td></tr>
<tr><td>1</td><td>2</td><td>3</td></tr>
</table>

<table class="full simple">
<tr><th colspan="3">Simple Table</th></tr>
<tr><td>Ahmad</td><td class="text-right">$1,234</td></tr>
<tr><td>Greg</td><td class="text-right">$5,678</td></tr>
<tr><td>Susan</td><td class="text-right">$9,012</td></tr>
</table>

<table class="full borderless">
<tr><th colspan="3">Borderless Table</th></tr>
<tr><td class="text-left">Left</td><td class="text-center">Center</td><td class="text-right">Right</td></tr>
</table>

***

## Links

You can create links to
[pages]({{ site.baseurl }}/pages/ "Page examples").

{% if site.posts.size > 0 %}

... or make a list of all the posts you have:

<ul>{% for post in site.posts -%}
<li><a href="..{{ post.url }}">{{ post.title }}</a></li>
{%- endfor %}</ul>

{% endif %}

If you link to a missing page, you'll see [an error](../404 "Page not found").

## Button Links

<a href="#" class="_bt -l -blue">Primary Button Link</a>
<a href="#" class="_bt -l -flat">Secondary Button Link</a>

{% if use_base_theme %}
## Theme control

Some layout allows user to switch between ***light*** and ***dark*** theme.

<b><a href="#" onclick="event.preventDefault();window.base&&window.base.theme.change()" title="Change theme (Ctrl+Alt+T)">Change theme (Ctrl+Alt+T)</a></b>
{% endif %}

## Footnotes

A footnote[^1] creates a list of references at the bottom of a page.

Normally you would use number as reference [^2].

You can also use word as reference [^note].

[^1]: A footnote reference.

[^2]: Footnote can also have multiple lines.
    Every new line in footnote should be prefixed with 2 space or 4 space indentation.

[^note]:
    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.  

***

Ends
{: .text-center.text-grey }
