###### site

```yml
title        : {{ site.title }}
description  : {{ site.description }}

theme        : {{ site.theme }}
remote_theme : {{ site.remote_theme }}

author       : {{ site.author }}
favicon      : {{ site.favicon }}
manifest     : {{ site.manifest }}
color_scheme : {{ site.color_scheme }}
theme_color  : {{ site.theme_color }}
header       : {{ site.header }}
cloudflare_analytics : {{ site.cloudflare_analytics }}
google_analytics     : {{ site.google_analytics }}

encoding      : {{ site.encoding }}
baseurl       : {{ site.baseurl }}
url           : {{ site.url }}
time          : {{ site.time }}
timezone      : {{ site.timezone }}
paginate_path : {{ site.paginate_path }}
permalink     : {{ site.permalink }}

source          : {{ site.source }}
destination     : {{ site.destination }}
collections_dir : {{ site.collections_dir }}
data_dir        : {{ site.data_dir }}
includes_dir    : {{ site.includes_dir }}
layouts_dir     : {{ site.layouts_dir }}
plugins_dir     : {{ site.plugins_dir }}

safe          : {{ site.safe }}
show_drafts   : {{ site.show_drafts }}
future        : {{ site.future }}
unpublished   : {{ site.unpublished }}
limit_posts   : {{ site.limit_posts }}
force_polling : {{ site.force_polling }}
verbose       : {{ site.verbose }}
quiet         : {{ site.quiet }}
profile       : {{ site.profile }}
incremental   : {{ site.incremental }}
lsi           : {{ site.lsi }}
strict_front_matter : {{ site.strict_front_matter }}
excerpt_separator   : {{ site.excerpt_separator | jsonify }}
disable_disk_cache  : {{ site.disable_disk_cache }}
ignore_theme_config : {{ site.ignore_theme_config }}
keep_files    : {{ site.keep_files | jsonify }}
include       : {{ site.include | jsonify }}
exclude       : {{ site.exclude | jsonify }}
whitelist     : {{ site.whitelist | jsonify }}
plugins       : {{ site.plugins | jsonify }}

highlighter   : {{ site.highlighter }}
markdown_ext  : {{ site.markdown_ext }}
markdown      : {{ site.markdown }}

kramdown:
  auto_ids         : {{ site.kramdown.auto_ids }}
  entity_output    : {{ site.kramdown.entity_output }}
  toc_levels       : {{ site.kramdown.toc_levels }}
  smart_quotes     : {{ site.kramdown.smart_quotes }}
  input            : {{ site.kramdown.input }}
  hard_wrap        : {{ site.kramdown.hard_wrap }}
  footnote_nr      : {{ site.kramdown.footnote_nr }}
  show_warnings    : {{ site.kramdown.show_warnings }}

liquid:
  error_mode       : {{ site.liquid.error_mode }}
  strict_filters   : {{ site.liquid.strict_filters }}
  strict_variables : {{ site.liquid.strict_variables }}

```

###### site.github

```yml
project_title   : {{ site.github.project_title }}
project_tagline : {{ site.github.project_tagline }}
repository_name : {{ site.github.repository_name }}
repository_nwo  : {{ site.github.repository_nwo }}
repository_url  : {{ site.github.repository_url }}
baseurl         : {{ site.github.baseurl }}
url             : {{ site.github.url }}
api_url         : {{ site.github.api_url }}
language        : {{ site.github.language }}
contributors    : {{ site.github.contributors.size | default:0 }}
releases        : {{ site.github.releases.size | default:0 }}
private         : {{ site.github.private }}
show_downloads  : {{ site.github.show_downloads }}

environment     : {{ site.github.environment }}
hostname        : {{ site.github.hostname }}

pages_env       : {{ site.github.pages_env }}
pages_hostname  : {{ site.github.pages_hostname }}

build_revision  : {{ site.github.build_revision }}
source          : {{ site.github.source }}

clone_url       : {{ site.github.clone_url }}
wiki_url        : {{ site.github.wiki_url }}
issues_url      : {{ site.github.issues_url }}
releases_url    : {{ site.github.releases_url }}
tar_url         : {{ site.github.tar_url }}
zip_url         : {{ site.github.zip_url }}

owner_name           : {{ site.github.owner_name }}
owner_url            : {{ site.github.owner_url }}
owner_gravatar_url   : {{ site.github.owner_gravatar_url }}
public_repositories  : {{ site.github.public_repositories.size | default:0 }}
organization_members : {{ site.github.organization_members }}

```

###### site.github.license

```yml
{% for v in site.github.license -%}
{{ v[0] }}: {{ v[1] }}
{% endfor %}
```

###### site.github.owner

```yml
{% for v in site.github.owner -%}
{{ v[0] }}: {{ v[1] }}
{% endfor %}
```

###### site.github.latest_release

```yml
{% if site.github.latest_release %}
{% for v in site.github.latest_release %}{% if v[0]!='author' -%}
{{ v[0] }}: {{ v[1] }}
{% endif %}{% endfor %}
author:
  {% for v in site.github.latest_release.author -%}
  {{ v[0] }}: {{ v[1] }}
  {% endfor %}
{% else %}
# no release
{% endif %}
```

###### site.github.versions

```yml
{% for v in site.github.versions -%}
{{ v[0] }}: {{ v[1] }}
{% endfor %}
```

###### site.sass

```yml
sass_dir: {{ site.sass_dir }}
{% for v in site.sass -%}
{{ v[0] }}: {{ v[1] }}
{% endfor %}
```

###### site.defaults

```yml
size: {{ site.defaults.size | default:0 }}
[{% for v in site.defaults %}
- {{ v[0] }}: {{ v[1] }}
{% endfor %}]
```

###### site.data

```yml
size: {{ site.data.size | default:0 }}
{{ site.data | jsonify }}
```

###### site.tags

```yml
size: {{ site.tags.size | default:0 }}
[{% for tag in site.tags %}
- {{ tag | jsonify }}
{% endfor %}]
```

###### site.categories

```yml
size: {{ site.categories.size | default:0 }}
{{ site.categories | jsonify }}
```

###### site.collections

```yml
size: {{ site.collections.size }}
{% for collection in site.collections %}
-
  label:  {{ collection.label }}
  relative_directory : {{ collection.relative_directory }}
  directory : {{ collection.directory }}
  permalink : {{ collection.permalink }}
  output    : {{ collection.output }}
  files     : size: {{ collection.files.size | default:0 }}
  docs      : size: {{ collection.docs.size | default:0 }}
{% endfor %}
```

###### site.documents

```yml
size: {{ site.documents.size | default:0 }}
[{% for file in site.documents %}
- {{ file.collection }}: url: {{ file.url }}
{% endfor %}]
```

###### site.static_files

```yml
size: {{ site.static_files.size | default:0 }}
[{% for file in site.static_files -%}
-
  basename      : {{ file.basename }}
  name          : {{ file.name }}
  path          : {{ file.path }}
  extname       : {{ file.extname }}
  modified_time : {{ file.modified_time }}
{% endfor %}]
```

###### site.posts

```yml
size: {{ site.posts.size | default:0 }}
[{% for post in site.posts %}
-
  title    : {{ post.title }}
  date     : {{ post.date }}
  layout   : {{ post.layout }}
  ext      : {{ post.ext }}
  slug     : {{ post.slug }}
  id       : {{ post.id }}
  url      : {{ post.url }}
  previous : {{ post.previous.id }}
  next     : {{ post.next.id }}
  path          : {{ post.path }}
  relative_path : {{ post.relative_path }}

  content : size: {{ post.content.size | default:0 }}
  output  : size: {{ post.output.size | default:0 }}
  excerpt : {{ post.excerpt | jsonify }}

  draft      : {{ post.draft }}
  collection : {{ post.collection }}
  categories : {{ post.categories | jsonify }}
  tags       : {{ page.tags | jsonify }}
{% endfor %}]
```

###### site.related_posts

```yml
size: {{ site.related_posts.size | default:0 }}
```

###### site.pages

```yml
size: {{ site.pages.size | default:0 }}
[{% for page in site.pages -%}
-
  title     : {{ page.title }}
  url       : {{ page.url }}
  path      : {{ page.path }}
  published : {{ page.published }}
{% endfor %}]
```
