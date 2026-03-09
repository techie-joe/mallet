# Techie Joe's Mallet

## ⚒️ A Jekyll theme for GitHub Pages

**[Preview the live demo](https://techie-joe.github.io/mallet/preview.html)** to see this theme in action, then **[start using it today!](#how-to-use)**

<a href="https://techie-joe.github.io/mallet/preview.html" title="See this theme in action." class="button primary" style="padding:.5em 1em;font-size:1.2rem;">Preview</a>
<a href="https://techie-joe.github.io/mallet/samples.html" title="View some samples." class="button secondary" style="padding:.5em 1em;font-size:1.2rem;font-weight:normal;">Samples</a>

<div style="margin-top:3rem"></div>

## Build faster on GitHub Pages

This is a **quick and easy way to build a website**. Build your website on GitHub Pages using **our ready-to-go templates and components**. Code your website in **Markdown**, **Pug** or **HTML**. Set and style any page instantly, just by referring to the pre-configured assets. Should you require any personalization, you can further customize every detail as needed, from global defaults to specific components. Lets build something great together!

```yml
remote_theme_version  : {{ site.version }}
remote_theme_revision : {{ site.revision }}
```

## How to use

To use the theme on your site:

1. Add the following lines to the `_config.yml` file at the root of your site's repository:

    ```yml
    remote_theme: techie-joe/mallet
    plugins:
        - jekyll-remote-theme
    ```

2. Clear out any existing values of `theme`.

3. Then, activate **GitHub Pages** for your site.

_For detailed instruction, see [The GitHub Pages Walkthrough](https://techie-joe.github.io/library/github-pages/)._

## How to customize

### Configuration variables

Set the following variables in your site's `_config.yml` file.

```yml
title       : "The title of your site"
description : "Short description of your site."
```

Additionally, you may also set:

```yml
ghost: your-tracking-id
# to track your ThemeJs.

google_analytics: your-tracking-id
# to track your website using Google Analytics.

cloudflare_analytics: your-tracking-id
# to track your website using Cloudflare Analytics.

show_downloads: true
# true or false (unquoted).
# to indicate whether to provide a download URL.
```

### Stylesheet

To add your own custom styles:

1. Create a file called `/assets/css/style.scss` in your site's repository with the following content, exactly as shown:

    ```scss
    ---
    ---
    @import "mallet";
    ```

2. Add any custom styles immediately after the `@import` line.

_**Note:** To change the theme's SASS variables, you must set new values before the `@import` line in your stylesheet._

### Layouts

All [theme layouts](https://github.com/techie-joe/mallet/tree/master/_layouts) in the `_layouts` folder and [theme components](https://github.com/techie-joe/mallet/tree/master/_includes) in the `_includes` folder provide a good starting point of things you can customize. To override a file, create a mirror copy of that file in your site's repository reflecting the exact path and file-name.

For example, to change the default layout:

1. Copy the `/_layouts/default.html` file to your site's repository.
2. Then customize it as you'd like.

_**Pro-tip:** click "raw" to make copying easier._

### Analytics code

Paste the analytics code into your site's `_includes/google_analytics.html` file.

### Overriding GitHub values

The theme rely on GitHub values, such as links to your repository or links to download your project.

To override the default values:

1. Look at the theme source file (in the `_layouts` and `_includes` folder) to determine the name of the variable. It will be in the form of:

    {% raw %}
    ```liquid
    {{ site.github.zip_url }}
    ```
    {% endraw %}

2. Specify the value you'd like to use in your site's `_config.yml` file. Jekyll will use the value you specified, instead of the default one.  

    For example, if the variable was `site.github.zip_url`, add the following:

    ```yml
    github:
        zip_url: http://example.com/download.zip
        # another_url: another_value
    ```

    > _**Note:** Ignore the `site.` prefix, and maintain the two space indent for each sub variables._

_For more information, see [Jekyll documentation on Variables](https://jekyllrb.com/docs/variables/)._

## Running the theme locally

To run the theme locally:

1. Clone the theme's repository into your computer:

    ```
    git clone https://github.com/techie-joe/mallet
    ```

2. Go to the cloned directory.

3. Add the following code to your site's `Gemfile`:

    ```ruby
    gem "github-pages", group: :jekyll_plugins
    ```

4. Run `script/bootstrap` to install necessary dependencies.
    > _This is a required one-time setup before other script can function._

5. Then run `script/serve` to start the server.

6. Visit [localhost:4000](//localhost:4000) in your browser to see the template.

## Roadmap

See the [open issues](https://github.com/techie-joe/mallet/issues) for a list of proposed features and known issues.

## License

**Mallet** is an open source project licensed under the [MIT LICENSE](https://github.com/techie-joe/mallet/blob/main/LICENSE). You're allowed to use the code with conditions only requiring preservation of copyright and license notices.