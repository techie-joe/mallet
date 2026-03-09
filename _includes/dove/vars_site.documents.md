{%- assign nl="
" %}
{%- assign pad = "             " %}
{%- assign word_key = "[0] key,[1] key,[n] keys" %}
{%- assign post_keys = "id,url,slug,title,description,author,draft,comments,date,layout,ext,name,path,relative_path,collection,categories,tags,content,excerpt,output,previous,next" %}

###### site.documents

Documents holds **everything**{: .text-purple } in your [collections](collections).
{: .small }

```yml
{{'# '}}{% include plural.md word="[0] document,[1] document,[n] documents" val=site.documents %}
{%- if site.documents %}
  {%- assign sorted_docs = site.documents | sort: "id" %}
  {%- for doc in sorted_docs %}
    {{-nl-}}{{-'# document'-}}[{{ forloop.index }}]{{' : '-}}
    {%- include plural.md val=doc.keys word=word_key %}
    {{-nl-}}
    {%-
      include inspect.md
      val = doc
      include = post_keys
      pad = pad
      tab = "  "
    %}
  {%- endfor %}
  {%- else -%} {{-nl-}} # its empty
{%- endif %}
```
{: .no_max_height }