{%- include ui.html %}
{%- if page.sample -%}
{%- assign _sub = page.layout | remove: '-page'| remove: '-post' %}
{%- include dove/sample_nav.md sub=_sub %}{{ thin_hr }}
{%- elsif page.dir == '/test/' %}
{%- include dove/test_nav.md %}{{ thin_hr }}
{%- else %}

{%- if page.path == 'index.html' -%}
**Home**{%- else -%}[Home]({{ site.home_url }}/)
{%- endif %}
{{- bull -}}
{%- if page.path == 'about.md' -%}
**About**{%- else -%}[About]({{ site.baseurl }}/about)
{%- endif %}
{{- bull -}}
{%- if page.path == 'pages.md' -%}
**Pages**{%- else -%}[Pages]({{ site.baseurl }}/pages)
{%- endif %}
{{- bull -}}
{%- if page.path == 'posts.md' -%}
**Posts**{%- else -%}[Posts]({{ site.baseurl }}/posts)
{%- endif %}

{{ thin_hr }}

{%- endif %}

{% comment %} --- end of page --- {% endcomment %}