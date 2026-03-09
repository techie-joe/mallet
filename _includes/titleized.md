{%- assign titleized_string = "" %}
{%- assign words = include.string | split: ' ' %}
{%- for word in words %}
{%- assign capitalized_word = word | capitalize | append: ' ' %}
{%- assign titleized_string = titleized_string | append: capitalized_word %}
{%- endfor %}
{%- assign titleized_string = titleized_string | strip %}