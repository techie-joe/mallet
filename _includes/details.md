{%- assign _summary = include.summary | default: _summary %}
{%- assign _details = include.details | default: _details %}
<details>
<summary>{{ _summary | markdownify }}</summary>
<div class="details">{{ _details | markdownify }}</div>
</details>