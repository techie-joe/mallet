{%- assign _word = include.word | default: "[0] item,[1] item,[n] items" | split: "," %}
{%- assign _val = include.val %}
{%- assign _size = include.val.size %}
{%- if _size == 0 -%} {{ _word[0] | replace: '[0]', 0 }}
{%- elsif _size == 1 -%} {{ _word[1] | replace: '[1]', _size }}
{%- elsif _size.size -%} {{ _word[2] | replace: '[n]', _size }}
{%- else -%} {{ _word[0] | replace: '[0]', 'no' }}
{%- endif %}