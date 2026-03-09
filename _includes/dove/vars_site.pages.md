{%- assign nl="
" %}
{%- assign pad = "             " %}
{%- assign word_key = "[0] key,[1] key,[n] keys" %}

###### site.pages

Pages holds **all standalone pages**{: .text-purple } on this website.
{: .small }

```yml
{{'# '}}{% include plural.md word="[0] page,[1] page,[n] pages" val=site.pages %}
{%- if site.pages %}
  {%- assign sorted_pages = site.pages | sort: "path" %}
  {%- for page in sorted_pages %}
    {{-nl-}}{{-'# page'-}}[{{ forloop.index }}]{{' : '-}}
    {%- include plural.md val=page word=word_key %}
    {{-nl-}}
    {%-
      include inspect.md
      val = page
      include = "title,description,layout,name,dir,url,path,content,excerpt"
      pad = pad
      tab = "  "
    %}
  {%- endfor %}
  {%- else -%} {{-nl-}} # its empty
{%- endif %}
```
{: .no_max_height }