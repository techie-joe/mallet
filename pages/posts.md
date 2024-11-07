---
title: Posts
description: Posts on this site.
permalink: posts
---

# Posts

> {{ page.description }}

{% for p in site.posts %}{% if p.title %}- [{{ p.title }}]({{ site.github.url }}{{ p.url }})
{% else %}- [(Untitled post)]({{ site.github.url }}{{ p.url }})
{% endif %}{% endfor %}

&nbsp;  
&nbsp;  

---

{% include back.html %}
<a title="Go to {{ site.title }}" class="_bt -l -flat" href="{{ site.github.url }}">Go to Home Page</a>