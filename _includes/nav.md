{%- include ui.html %}
{%- if page.sample %}
{%- include dove/sample_nav.md %}
{{ thin_hr }}
{%- else %}
{%- include site_nav.md %}
{{ thin_hr }}
{%- endif %}