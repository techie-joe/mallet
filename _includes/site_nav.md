{%- if page.path == 'index.html' -%}
**Home**{%- else -%}[Home]({{ site.home_url }}/)
{%- endif %}
{{- bull -}}
{%- if page.path == 'preview.html' -%}
**Preview**{%- else -%}[Preview]({{ site.baseurl }}/preview)
{%- endif %}
{{- bull -}}
{%- if page.path == 'samples.html' -%}
**Samples**{%- else -%}[Samples]({{ site.baseurl }}/samples)
{%- endif %}
{{- bull -}}
{%- if page.path == 'pages.md' -%}
**Pages**{%- else -%}[Pages]({{ site.baseurl }}/pages)
{%- endif %}
{{- bull -}}
{%- if page.path == 'posts.md' -%}
**Posts**{%- else -%}[Posts]({{ site.baseurl }}/posts)
{%- endif %}