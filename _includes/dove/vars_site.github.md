{%- assign nl="
" %}
{%- assign pad = "             " %}
{%- assign word_key = "[0] key,[1] key,[n] keys" %}
{%- assign owner_keys = "type,name,bio,description,id,login,email,location,company,is_verified,hireable,followers,following,public_gists,public_repos,avatar_url,html_url,blog,created_at,updated_at" %}

###### site.github

```yml
{%
  include inspect.md
  val = site.github
  include = "project_title,project_tagline,repository_name,repository_nwo,repository_url,url,baseurl,language,archived,disabled,private,show_downloads,is_project_page,is_user_page,hostname,environment,pages_env,pages_hostname,build_revision,api_url,help_url,clone_url,issues_url,releases_url,tar_url,zip_url,wiki_url,owner_display_name,owner_name,owner_url,owner_gravatar_url,source,license,owner,latest_release,releases,contributors"
  blok = "license,owner,versions"
  bloi = "public_repositories,contributors"
  peek = ""
  pad = "                    "
%}
```
{: .no_max_height }

###### site.github.license

```yml
{%
  include inspect.md
  val = site.github.license
  pad = pad
%}
```
{: .no_max_height }

###### site.github.owner

```yml
{%
  include inspect.md
  val = site.github.owner
  include = owner_keys
  pad = pad
%}
```
{: .no_max_height }

###### site.github.releases

```yml
# {% include plural.md val=site.github.releases word="[0] release,[1] release,[n] releases" %}
{%- if site.github.releases %}
  {%- assign sorted_releases = site.github.releases | sort %}
  {%- if sorted_releases.size > 0 %}
    {%- assign release = sorted_releases[0] -%}
    {{-nl-}}{{-'# release'-}}[{{ forloop.index }}]{{' : '-}}
    {%- include plural.md val=release word=word_key %}
    {{-nl-}}
    {%-
      include inspect.md
      val = release
      pad = pad
    %}
  {%- endif %}
  {%- else -%} {{-nl-}} # no release found
{%- endif %}
```
{: .no_max_height }

###### site.github.contributors

```yml
{{'# '}}{% include plural.md val=site.github.contributors word="[0] contributor,[1] contributor,[n] contributors" %}
{%- if site.github.contributors %}
  {%- assign sorted_contributors = site.github.contributors | sort: "login" %}
  {%- for user in sorted_contributors %}
    {{-nl-}}{{-'# contributor'-}}[{{ forloop.index }}]{{' : '-}}
    {%- include plural.md val=user word=word_key %}
    {{-nl-}}
    {%-
      include inspect.md
      val = user
      include = "type,login,id,node_id,html_url"
      pad = "                   "
      tab = "  "
    %}
  {%- endfor %}
  {%- else -%} {{-nl-}} # no contributor found
{%- endif %}
```

###### site.github.versions

```yml
{{'# '}}{% include plural.md word=word_key val=site.github.versions %}
{%- if site.github.versions %}
  {%- assign sorted_versions = site.github.versions | sort %}
  {%- for v in sorted_versions %}
  {{-nl-}} {{ v[0] }} : {{ v[1] }}
  {%- endfor %}
  {%- else -%} {{-nl-}} # unversioned
{%- endif %}
```