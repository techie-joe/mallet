{%- include ui.html %}

**{% include plural.md val=keys word="[0] key,[1] key,[n] keys" %} :**{{' '}}
{{- keys | sort | join: ", " }}
{: .box.highlight.pa.smaller.mono }

```yml
content: [blob] # content of the current page {{''}}
{%- include peek.md val=content word="[0] byte,[1] byte,[n] bytes" %}

highlighter_prefix : {{ highlighter_prefix | jsonify }}
highlighter_suffix : {{ highlighter_suffix | jsonify }}

jekyll: [{{ jekyll }}] {{''}}
{%- include peek.md val=jekyll %}

layout: {{''}}
{%- include peek.md val=layout %}

page: [json] {{''}}
{%- include peek.md val=page %}

paginator: {{''}}
{%- include peek.md val=paginator %}

site: [{{ site }}] {{''}}
{%- include peek.md val=site %}

theme: {{''}}
{%- include peek.md val=theme %}
```
{: .no_max_height }

{% comment %} --- end of page --- {% endcomment %}