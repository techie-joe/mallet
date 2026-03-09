{%- include ui.html %}
{%- if site.github.repository_nwo == 'techie-joe/dove' %}
{%- include dove/sample_post_footer.md %}
{%- else %}

{%- capture _posts %}
## Other posts
{%- include posts.md %}
{%- endcapture %}
<aside style="margin-top:3rem">{{ _posts | markdownify }}</aside>

{%- endif %}