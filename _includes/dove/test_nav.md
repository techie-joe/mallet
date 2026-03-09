{%- include ui.html %}

**Test**
{{- angle -}}
{% if page.path == 'test/md.md' -%}
**Markdown**{%- else %}[Markdown]({{ site.baseurl }}/test/md)
{%- endif %}
{{- bull -}}
{% if page.path == 'test/pug.html' -%}
**Pug**{%- else %}[Pug]({{ site.baseurl }}/test/pug)
{%- endif %}

{%- comment %}
{%- endcomment %}