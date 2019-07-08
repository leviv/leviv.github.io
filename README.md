# leviv.github.io
Personal website

## Description
A repository to hold all of my current projects. Currently all of the content on the site is static, although I plan to change that soon so that content can be updated more easily.

## Prerequisites
In order to compile the styles for this project, you need to have SASS installed.

To install SASS using npm
```bash
npm install -g sass
```

Install SASS using homebrew
```bash
brew install sass/sass/sass
```

## Getting started
To clone the repository to your local machine
```bash
git clone git@github.com:leviv/leviv.github.io.git
```
Then simply open `index.html` in your favorite web browser to get it up and running

## Development
To compile SASS changes to make them take effect
```bash
cd assets/css
sass --watch styles.sass:styles.css
```
