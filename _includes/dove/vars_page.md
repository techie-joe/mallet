###### page

Page holds data specific to the current file being rendered.
{: .small }

```yml
{%
  include inspect.md
  pad = "            "
  val = page
  include = "title,description,name,dir,path,url,layout,content,excerpt"
%}
```
{: .no_max_height }