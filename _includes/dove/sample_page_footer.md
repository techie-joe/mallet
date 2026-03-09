{%- include ui.html %}
{%- if page.sample %}

{%- capture _pages %}
## Other pages
- `// links to other page`
- [Example page](#){: onclick="{{onclick}}"}
- [Another link to a page](#){: onclick="{{onclick}}"}
- [You get the point](#){: onclick="{{onclick}}"}
{%- endcapture %}
<aside style="margin-top:3rem">{{ _pages | markdownify }}</aside>

{%- else %}

{%- capture _pages %}
## Other pages
{%- include pages.md %}
{%- endcapture %}
<aside style="margin-top:3rem">{{ _pages | markdownify }}</aside>

{%- endif %}