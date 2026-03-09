{%- include ui.html %}

{%- assign _sub = include.sub | default: '' %}
{%- assign _main = _sub | append: 'samples' %}
{%- assign _home = _sub | append: 'md/index' %}
{%- assign _page = _sub | append: 'md/page' %}
{%- assign _post = _sub | append: 'md/post' %}
{%- assign _404  = _sub | append: 'md/404' %}

{%- assign _path = _main %}
[Samples]({{ site.baseurl }}/{{ _main }})
{{- angle -}}
{%- assign _path = _home | append: '.md' %}
{%- if page.path == _path -%}
**Home**{%- else %}[Home]({{ site.baseurl }}/md/)
{%- endif %}
{{- bull -}}
{%- assign _path = _page | append: '.md' %}
{%- if page.path == _path -%}
**Page**{%- else %}[Page]({{ site.baseurl }}/{{ _page }})
{%- endif %}
{{- bull -}}
{%- assign _path = _post | append: '.md' %}
{%- if page.path == _path -%}
**Post**{%- else %}[Post]({{ site.baseurl }}/{{ _post }})
{%- endif %}
{{- bull -}}
{%- assign _path = _404 | append: '.md' %}
{%- if page.path == _path -%}
**404**{%- else %}[404]({{ site.baseurl }}/{{ _404 }})
{%- endif %}

{% comment %}
{% endcomment %}