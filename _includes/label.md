{%- assign _pad = include.pad | default: "" %}
{%- assign _key = include.text %}
{%- if _pad.size > _key.size %}
{{- _key | append: _pad | slice: 0, _pad.size }}
{%- else %}
{{- _key }}
{%- endif %}