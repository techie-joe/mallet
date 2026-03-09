{%- include ui.html %}
{%- if page.sample and page.path != 'md/404.md' %}
{{ thin_hr }}
`// site footer`
{{ thin_hr }}
{%- capture sample_nav %}{%- include dove/sample_nav.md %}{%- endcapture %}
<nav class="_common_nav">{{ sample_nav | markdownify }}</nav>
{{ thin_hr }}
{%- else %}
{%- unless page.use_footer contains 'edit_link_only' -%}

<!-- your footer goes here -->

{%- if page.sample %}
{{ thin_hr }}
{%- capture sample_nav %}{%- include dove/sample_nav.md %}{%- endcapture %}
<nav class="_common_nav">{{ sample_nav | markdownify }}</nav>
{%- endif %}

{%- unless page.path == '404.md'
        or page.path == 'index.md'
        or page.path == 'pages.md'
        or page.path == 'posts.md' %}
{{ thin_hr }}
{%- capture site_nav %}{%- include site_nav.md %}{%- endcapture %}
<nav class="_common_nav">{{ site_nav | markdownify }}</nav>
{%- endunless %}

{{ thin_hr }}
{%- capture tj_nav %}{%- include dove/tj_nav.md %}{%- endcapture %}
<nav class="_common_nav">{{ tj_nav | markdownify }}</nav>

{%- endunless %}

{{ thin_hr }}

This site is open source. {{edit_link}}.
{: .text-right.text-gray.small }

{%- endif %}