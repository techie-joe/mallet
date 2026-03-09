{%- assign nl="
" %}
{%- assign pad = "             " %}
{%- assign word_key = "[0] key,[1] key,[n] keys" %}
{%- assign post_keys = "id,url,slug,title,description,author,draft,comments,date,layout,ext,name,path,relative_path,collection,categories,tags,content,excerpt,output,previous,next" %}

###### site.posts

Posts holds **all blog entries**{: .text-purple } in the `_posts` directory.
{: .small }

```yml
{{'# '}}{% include plural.md word="[0] post,[1] post,[n] posts" val=site.posts %}
{%- if site.posts %}
  {%- assign sorted_posts = site.posts | sort: "id" %}
  {%- for post in sorted_posts %}
    {{-nl-}}{{-'# post'-}}[{{ forloop.index }}]{{' : '-}}
    {%- include plural.md val=post.keys word=word_key %}
    {{-nl-}}
    {%-
      include inspect.md
      val = post
      include = post_keys
      pad = pad
      tab = "  "
    %}
  {%- endfor %}
  {%- else -%} {{-nl-}} # its empty
{%- endif %}
```
{: .no_max_height }