{%- assign nl="
" %}
{%- assign pad = "             " %}
{%- assign word_key = "[0] key,[1] key,[n] keys" %}

###### site.static_files

All files on this website that is **not a page**{: .text-purple }.
{: .small }

```yml
{{'# '}}{% include plural.md word="[0] file,[1] file,[n] files" val=site.static_files %}
{%- if site.static_files %}
  {%- assign sorted_files = site.static_files | sort: "path" %}
  {%- for file in sorted_files %}
    {{-nl-}}{{-'# file'-}}[{{ forloop.index }}]{{' : '-}}
    {%- include plural.md val=file.keys word=word_key %}
    {{-nl-}}
    {%-
      include inspect.md
      val = file
      pad = pad
      tab = "  "
    %}
  {%- endfor %}
  {%- else -%} {{-nl-}} # its empty
{%- endif %}
```
{: .no_max_height }