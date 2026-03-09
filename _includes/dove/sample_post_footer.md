{%- include ui.html %}
{%- if page.sample %}

{%- capture _posts %}
## Other posts
- `// links to other post`
- [Example post](#){: onclick="{{onclick}}"}
- [Another link to a post](#){: onclick="{{onclick}}"}
- [You get the point](#){: onclick="{{onclick}}"}
{%- endcapture %}
<aside style="margin-top:3rem">{{ _posts | markdownify }}</aside>

{%- else %}

{%- capture _posts %}
## Other posts
{%- include posts.md %}
{%- endcapture %}
<aside style="margin-top:3rem">{{ _posts | markdownify }}</aside>

{%- endif %}