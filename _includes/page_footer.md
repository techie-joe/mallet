{%- include ui.html %}
{%- if page.sample %}
{%- include dove/sample_page_footer.md %}
{%- else %}

{%- capture _pages %}
## Other pages
{%- include pages.md %}
{%- endcapture %}
<aside style="margin-top:3rem">{{ _pages | markdownify }}</aside>

{%- endif %}