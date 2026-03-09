{%- assign nl="
" %}
{%- assign pad = "             " %}
{%- assign word_key = "[0] key,[1] key,[n] keys" %}

###### site.data

Data stores custom structured informations, separated from the rest of your content.
{: .small }

```yml
{{'# '}}{% include plural.md word="[0] file,[1] file,[n] files" val=site.data %}
{%- for file in site.data %}
  {%- assign _key = file[0] %}
  {%- assign _d = file[1] %}
  {{-nl-}}{{-'# file'-}}[{{ forloop.index }}]{{' - '}}{{ _key }}{{' : '-}}
  {%- include plural.md val=_d word=word_key %}
  {{-nl-}}
  {%-
    include inspect.md
    val = _d
    pad = pad
    tab = "  "
  %}
  {%- else -%} {{-nl-}} # its empty
{%- endfor %}
```
{: .no_max_height }