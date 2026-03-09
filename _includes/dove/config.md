```yml
title       : {{ site.title | default: "[nil]" }}
description : {{ site.description | default: "[nil]" }}
author      : {{ site.author | default: "[nil]" }}
version     : {{ site.version | default: "[nil]" }}
revision    : {{ site.revision | default: "[nil]" }}
live_url    : {{ site.live_url | default: "[nil]" }}
home_url    : {{ site.home_url | default: "[nil]" }}
baseurl     : {{ site.baseurl | default: "[nil]" }}
lang        : {{ site.lang | default: "[nil]" }}
build_revision       : {{ site.github.build_revision | default: "[nil]" }}
ghost                : {{ site.ghost | default: "[nil]" }}
google_analytics     : {{ site.google_analytics | default: "[nil]" }}
cloudflare_analytics : {{ site.cloudflare_analytics | default: "[nil]" }}
```
