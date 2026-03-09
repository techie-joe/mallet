{% include ui.html %}

{%- capture _menu %}
{% if page.path == 'vars/index.md' -%}
**Variables**{%- else %}[Variables]({{ site.baseurl }}/vars)
{%- endif %}
{{- angle -}}
{% if page.path == 'vars/page.md' -%}
**Page**{%- else %}[Page]({{ site.baseurl }}/vars/page)
{%- endif %}
{{- bull -}}
{% if page.path == 'vars/site.md' -%}
**Site**{%- else %}[Site]({{ site.baseurl }}/vars/site)
{%- endif %}
{{- bull -}}
{% if page.path == 'vars/data.md' -%}
**Data**{%- else %}[Data]({{ site.baseurl }}/vars/data)
{%- endif %}
{{- bull -}}
{% if page.path == 'vars/collections.md' -%}
**Collections**{%- else %}[Collections]({{ site.baseurl }}/vars/collections)
{%- endif %}
{{- bull -}}
{% if page.path == 'vars/documents.md' -%}
**Documents**{%- else %}[Documents]({{ site.baseurl }}/vars/documents)
{%- endif %}
{{- bull -}}
{% if page.path == 'vars/posts.md' -%}
**Posts**{%- else %}[Posts]({{ site.baseurl }}/vars/posts)
{%- endif %}
{{- bull -}}
{% if page.path == 'vars/pages.md' -%}
**Pages**{%- else %}[Pages]({{ site.baseurl }}/vars/pages)
{%- endif %}
{{- bull -}}
{% if page.path == 'vars/files.md' -%}
**Files**{%- else %}[Files]({{ site.baseurl }}/vars/files)
{%- endif %}
{{- bull -}}
{% if page.path == 'vars/github.md' -%}
**Github**{%- else %}[Github]({{ site.baseurl }}/vars/github)
{%- endif %}
{{- bull -}}
{% if page.path == 'vars/repo.md' -%}
**Repository**{%- else %}[Repository]({{ site.baseurl }}/vars/repo)
{%- endif %}
{%- endcapture %}

<nav class="_common_nav" style="margin:1rem 0">{{ _menu | markdownify }}</nav>

{% comment %}
{% endcomment %}