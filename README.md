# leviv.github.io

A repository to hold all of my past and current projects and blog posts.

View the site here: https://leviv.cool/.

## Prerequisites

In order to compile the styles for this project, you need to have [Jekyll](https://jekyllrb.com/) installed.

Install [Homebrew](https://brew.sh/)

```bash
brew install ruby
sudo gem install bundler jekyll
```

If you have issues, run through [this setup guide](https://jekyllrb.com/docs/installation/macos/) to ensure you have the correct dependencies.

Also running these commmands helped:

```
bundle update
bundle install
```

## Getting started

To clone the repository to your local machine

```bash
git clone git@github.com:leviv/leviv.github.io.git
```

Then run the app with the following commands

```bash
cd leviv.github.io
bundle exec jekyll serve --livereload
```

and open http://127.0.0.1:4000/

## Development

Edit any of the theme files and the page should automatically be rebuilt and reloaded.
