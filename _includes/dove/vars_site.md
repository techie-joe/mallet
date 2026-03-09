{%- assign nl="
" %}
{%- assign pad = "             " %}
{%- assign word_key = "[0] key,[1] key,[n] keys" %}

###### site

Site stores informations about the whole website.
{: .small }

```yml
{%
  include inspect.md
  val = site
  include = "title,description,author,time,version,revision,host,port,url,live_url,home_url,baseurl,paginate_path,permalink,encoding,lang,ghost,google_analytics,cloudflare_analytics,theme,sass,liquid,kramdown,highlighter,markdown,markdown_ext,excerpt_separator,keep_files,include,exclude,whitelist,plugins,cache_dir,data_dir,includes_dir,layouts_dir,plugins_dir,collections_dir,detach,future,incremental,limit_posts,lsi,quiet,safe,serving,show_drafts,show_downloads,show_dir_listing,strict_front_matter,unpublished,verbose,watch,related_posts,config,defaults,data,collections,documents,posts,categories,tags,pages,html_pages,static_files,github"
  bloi = "config,defaults,data,collections,documents,posts,categories,tags,pages,static_files,html_pages,keep_files,include,exclude,whitelist,plugins"
  blok = "sass,liquid,kramdown"
  bloc = "github"
  exclude = "source,destination"
  pad = pad
%}
```
{: .no_max_height }

###### site.sass

```yml
{%
  include inspect.md
  val=site.sass
  pad=pad
%}
```
{: .no_max_height }

###### site.liquid

```yml
{%
  include inspect.md
  val=site.liquid
  pad=pad
%}
```
{: .no_max_height }

###### site.kramdown

```yml
{%
  include inspect.md
  val=site.kramdown
  pad=pad
%}
```
{: .no_max_height }

###### site.defaults

```yml
{{'# '}}{% include plural.md word="[0] default,[1] default,[n] defaults" val=site.defaults %}
{%- for _d in site.defaults %}
  {{-nl-}}{{-'# default'-}}[{{ forloop.index }}]{{' : '-}}
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

###### site.include

```
{{ site.include | join:nl | default: '[empty]' }}
```

###### site.exclude

```
{{ site.exclude | join:nl | default: '[empty]' }}
```

###### site.whitelist

```
{{ site.whitelist | join:nl | default: '[empty]' }}
```

###### site.plugins

```
{{ site.plugins | join:nl | default: '[empty]' }}
```