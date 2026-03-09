{%- include ui.html %}
{%- unless page.use_footer contains 'edit_link_only' or page.dir == '/vars/' -%}
{%- if page.sample -%}

{{ thin_hr }}

`// site footer`

{{ thin_hr }}

{%- assign _sub = page.layout | remove: '-page'| remove: '-post' %}
{%- capture sample_nav %}{%- include dove/sample_nav.md sub=_sub %}{%- endcapture %}
<nav class="_common_nav">{{ sample_nav | markdownify }}</nav>

{%- else %}

{{ thin_hr }}

{%- unless page.path == 'posts.md' or page.path == 'pages.md' %}
{%- capture dove_nav %}{%- include dove/nav.md %}{%- endcapture %}
<nav class="_common_nav">{{ dove_nav | markdownify }}</nav>
{%- endunless %}

{%- capture tj_nav %}{%- include dove/tj_nav.md %}{%- endcapture %}
<nav class="_common_nav">{{ tj_nav | markdownify }}</nav>

{%- endif %}
{%- endunless %}

{{ thin_hr }}

This site is open source. {% github_edit_link "Improve this page" %}.
{: .text-right.text-gray.small }