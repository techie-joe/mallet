###### General

```
Markdown render `code block` as is.
    white-spaces, new lines, tabs and all. 

Long, single-line `code block` should not wrap. They should remain on a single line instead of breaking into multiple lines. If the line is too long to fit within the visible width of the page, the reader should be able to scroll horizontally to see the rest of it. This line should be long enough to demonstrate this.
```

###### Javascript

```js
// Javascript code with syntax highlighting
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
/*
  comment block
*/
```

###### Ruby

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
=begin
  comment block
=end
```

```ruby
foo ||= bar
foo / bar
21 + 54 = 0
24
45.75
0x2C716
\x0A
01010
/ya?ml/
"yaml"
```

```ruby
# Ruby module
include Enumerable

module Foo
  class Bar
    LIPSUM = "lorem ipsum dolor sit"
    attr_reader :layout

    # instance methods
    def initialize
      @layout = Layout.new
    end
    def profile
      measure_time do
        compile layout
        layout.render_with Bar::LIPSUM
    end
    rescue ArgumentError
      false
    end

  end
end

# Execute code
Foo::Bar.new.profile
```

###### Diff

```diff
- This line is redacted
- This line has been deleted
+ This line is visible
+ This line has been inserted
This line has not been changed
```

###### Sass

```sass
// SASS code with syntax highlighting
@import "base"
.card
  display: inline-block
  margin: 0
  padding: 0
  &:hover
    color: #ab45ef;
```

###### Liquid

{% raw %}
```liquid
# Liquid code with syntax highlighting
{%- assign variable = value | filter: 'filter_expression' %}
{{ variable | default: "[default_value]" }}
{{ json | jsonify }}
{{ markdown | markdownify }}
{% comment %} comment block {% endcomment %}
```
{% endraw %}

###### Yaml

```yaml
# Yaml code with syntax highlighting
author:
  admin: true
  name: John Doe
  email: johndoe@example.com
  id: 75636474
```

###### HTML

```html
<!-- HTML code with syntax highlighting -->
<html>
  <head>
    <meta charset="utf-8" />
    <title>Hello World</title>
  </head>
  <body>
    <p>Hello, World!</p>
  </body>
</html>
```

{% highlight html mark_lines="1 4 7" %}
<html>
  <head>
    <meta charset="utf-8" />
    <title>Hello World</title>
  </head>
  <body>
    <p>Hello, World!</p>
  </body>
</html>
{% endhighlight %}

{% highlight html linenos %}
<html>
  <head>
    <meta charset="utf-8" />
    <title>Hello World</title>
  </head>
  <body>
    <p>Hello, World!</p>
  </body>
</html>
{% endhighlight %}

{% highlight html linenos mark_lines="1 4 7" %}
<html>
  <head>
    <meta charset="utf-8" />
    <title>Hello World</title>
  </head>
  <body>
    <p>Hello, World!</p>
  </body>
</html>
{% endhighlight %}