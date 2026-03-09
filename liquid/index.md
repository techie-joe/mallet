---
layout: default-page
title: Liquid
description: Liquid syntax on Github Pages.
---
{%- include ui.html %}

# Liquid syntax

{% raw %}
```liquid
# Liquid code with syntax highlighting
{% assign variable = value | filter: filter_expression, 'or value' %}
{{ variable | default: value | default: "[default_value]" }}
{{ json | jsonify }}
{{ markdown | markdownify }}
{% include filename.ext arg = value %}
{% include_relative filename.ext argument = value  %}
{% if true -%} then true {%- else -%} then otherwise {%- endif %}
{% unless true  -%} normally {%- else -%} otherwise {%- endunless %}
{% case x %}{%- when a -%} x is a {%- else -%} otherwise {%- endcase %}
{% capture it %} capture block {% endcapture %}{{ it }}
{% comment %} comment block {% endcomment %}
```
```liquid
{% assign numbers = (1..9) %}
{% if true and false or x == y %}{% endif %}
```
{% endraw %}

> nil, "" and 0 are treated as **false**
{: .mono.smaller }

###### controls

```yml
if true : {% if true -%} then true {%- else -%} then otherwise {%- endif %}
elsif true : {% if false -%} then false {%- elsif true -%} then true {%- endif %}
else : {% if false -%} then false {%- else -%} then otherwise {%- endif %}

unless false : {% unless false -%} normally {%- else -%} otherwise {%- endunless %}
unless true  : {% unless true  -%} normally {%- else -%} otherwise {%- endunless %}

case x : {%- assign a = 'x is a' %}
when a : {%- assign x = a %}
{%- case x %}
{%- when a %} {{ a }}
{%- else %} otherwise 
{%- endcase %}
else   : {%- assign x = 'otherwise' %}
{%- case x %}
{%- when a %} {{ a }}
{%- else %} otherwise 
{%- endcase %}
```

###### strings

{%- assign string = ' jAmEs,  pEtErSoN . ' %}

```yml
string     : {{ string | jsonify }} [{{ string | size | append: ' characters' }}]

# replace: ',' | remove: '.' | strip
{%- assign string = string | replace: ',', ' ' | remove: '.' | strip %}
string     : {{ string | jsonify }} [{{ string | size | append: ' characters' }}]

# split: ' ' | join: ' '
{%- assign string = string | split: ' ' | join: ' ' %}
string     : {{ string | jsonify }} [{{ string | size | append: ' characters' }}]

upcase     : {{ string | upcase | jsonify }}
downcase   : {{ string | downcase | jsonify }}
capitalize : {{ string | capitalize | jsonify }}

# titleize is not working, you have to use titleized
titleize   : {{ string | titleize | jsonify }}
titleized  : {% include titleized.md string=string %}{{ titleized_string | jsonify }}

# downcase | replace: "james", "smith" | prepend: 'Mr. ' | append: ' Jr.'
{%- assign string = string | downcase | replace: "james", "smith" | prepend: 'mr ' | append: ' jr' %}
{% include titleized.md string = string %}
{%- assign string = titleized_string %}
string     : {{ string | jsonify }} [{{ string | size | append: ' characters' }}]
slice      : {{ string | slice: 0, 15 | jsonify }}
truncate   : {{ string | truncate: 15 | jsonify }}
```

###### date

{%- assign date = '2005-03-09T20:10:30' %}
{%- assign date_format = "%A, %B %d, %Y @ %I:%M:%S %p" %}

```yml
date : {{ date }}
date : {{ date | date: date_format }}
now  : {{ "now" | date: date_format }}
```

| -- | :-------------------------------- | ----- | 
| %B | Full month name | November |
| %b | Abbreviated month name | Nov |
| %A | Full day name | Thursday |
| %a | Abbreviated day name | Thursday |
| %w | Day of the week as a number (0=Sunday, 6=Saturday) | 4 |
| %d | Month as a padded number (01-12) | 03 |
| %m | Month as a padded number (01-12) | 03 |
| %Y | Full year (4 digits) | 2005 |
| %y | Year as a padded number (2 digits) | 05 |
| %H | 24-hour clock (00-23) | 21 |
| %I | 12-hour clock (01-12) | 06 |
| %M | Minute as a padded number (00-59) | 01 |
| %S | Second as a padded number (00-59) | 02 |
| %p | AM/PM indicator (uppercase) | PM |
{: .simple }

###### loops

{%- assign numbers = (1..9) %}

```liquid
{% raw %}{%- assign numbers = (1..9) %}{% endraw %}
```

```yml
numbers : {{ numbers | jsonify }} [{{ numbers | size | append: ' items' }}]
{{''-}}
numbers : {{''-}}
{%- for i in (1..19) limit:9 %}{{- i }}
{%- unless forloop.last -%},{%- endunless %}
{%- endfor %}
{{-''-}}
{%- assign number_names = "one,two,three,four,five,six,seven,eight,nine,ten" | split:"," %}
{%- for n in number_names %}
{%- if forloop.index == 3 %}{{nl | append: '# skipped 3' }}{% continue %}{% endif %}
{%- if forloop.index == 6 %}{{nl | append: '# break at 6' }}{% break %}{% endif %}
{% include label.md text=n pad="       " %} : {{'['-}}
{{- forloop.index }},
{%- cycle '"odd"', '"even"' %}
{{-']'}}
{%- endfor %}
{%- for n in emptiness %}
{%- else %}{{nl | append: '# emptiness' }}
{%- endfor %}
```

{% raw %}Use `{% break %}` and `{% continue %}` to get out of a loop. 
Use `{% else %}` to handle empty arrays.{% endraw %}

###### list

{%- assign chars = 'a,m,b,n,c,o,z,y,x' | split: ',' %}

```liquid
{% raw %}{%- assign chars = 'a,m,b,n,c,o,z,y,x' | split: ',' %}{% endraw %}
```

```yml
chars   : [{{ chars }}] [{{ chars | size | append: ' items' }}]
jsonify : {{ chars | jsonify }}
join    : {{ chars | join: ',' | jsonify }}
order   : {{ chars | first }}{{' ... '}}{{ chars | last }}
loop    : {% for item in chars %}{{ item }}{% unless forloop.last %}{{'-'}}{%- endunless %}{%- endfor %}
reverse : {{ chars | reverse | jsonify }}
sort    : {{ chars | sort | jsonify }}
slice   : {{ chars | slice: 3, 3 | jsonify }}
```

{%- assign fruits = 'apple,banana,cherry' | split: ',' %}

```liquid
{% raw %}{%- assign fruits = 'apple,banana,cherry' | split: ',' %}{% endraw %}
```

```yml
fruits  : {{ fruits | jsonify }} [{{ fruits | size | append: ' items' }}]
```

{%- assign fruits = fruits | join: ',' | prepend: 'pear,' | append: ',durian' | split: ',' %}

```liquid
{% raw %}{%- assign fruits = fruits | join: ',' | prepend: 'pear,' | append: ',durian' | split: ',' %}{% endraw %}
```

```yml
fruits  : {{ fruits | jsonify }} [{{ fruits | size | append: ' items' }}]
```

###### capture

{% capture block -%} **captured block** {%- endcapture %}

{{ block }}
{: .box.ba.text-center }

{% capture note_md -%}
Use `markdownify` before using it inside an HTML block.
{%- endcapture %}

<div class="box ba text-center">{{ note_md | markdownify }}</div>

###### raw
`raw` skips liquid. 
But using **white-space modifier** `-` with it will cause build error.  

{%- assign _raw = '% raw %' | prepend: '{' | append: '}' %}
{%- assign _end_raw = '% endraw %' | prepend: '{' | append: '}' %}

```liquid
{{ _raw -}}
{% raw %}{{ by | default: 'everything inside raw will be rendered as-is' }}{% endraw %}
{{- _end_raw }}
```

## Unsupported Liquid Syntaxes

Github Pages does not support `echo` and `render` at the moment.

{% raw %}
```liquid
{% echo 'echo' %}
{% render 'snippet', 
  card_title: "Coffee Maker", 
  card_description: "Brews perfect coffee every time." 
%}
```
{% endraw %}

Looks like the following syntax isn't working.

```yml
# Check a blanks against the blank keyword.
{% if blanks == blank -%} blanks is blank {%- else -%} blank is not working {%- endif %}

# Compare an emptiness against the empty keyword.
{% if emptiness == empty -%} emptiness is empty {%- else -%} empty is not working {%- endif %}
```

<div style="margin-top:3rem"></div>