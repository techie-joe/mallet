{%- include ui.html %}
{%- unless page.use_footer contains 'edit_link_only' -%}

<!-- your footer goes here -->

{%- if page.sample %}
{%- capture sample_nav %}{%- include dove/sample_nav.md %}{%- endcapture %}
{{ thin_hr }}
<nav class="_common_nav">{{ sample_nav | markdownify }}</nav>
{%- endif %}

{%- unless page.path == '404.md'
        or page.path == 'index.md'
        or page.path == 'pages.md'
        or page.path == 'posts.md' %}
{%- capture site_nav %}{%- include site_nav.md %}{%- endcapture %}
{{ thin_hr }}
<nav class="_common_nav">{{ site_nav | markdownify }}</nav>
{%- endunless %}

{%- capture tj_nav %}{%- include dove/tj_nav.md %}{%- endcapture %}
{{ thin_hr }}
<nav class="_common_nav">{{ tj_nav | markdownify }}</nav>

{%- endunless %}

{{ thin_hr }}

This site is open source. {% github_edit_link "Improve this page" %}.
{: .text-right.text-gray.small }