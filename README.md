[![Build Status](https://travis-ci.org/rahmanda/tailwindscss.svg?branch=master)](https://travis-ci.org/rahmanda/tailwindscss)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/tailwindscss.svg)](https://badge.fury.io/js/tailwindscss)

# Tailwind SCSS

SCSS version of Tailwind CSS for people who don't use modern module bundler.

## Why??

The original Tailwind CSS use PostCSS for its CSS preprocessor. Therefore, we have to use Node.js module bundler (Webpack, Rollup etc) in order to get fully control over Tailwind's customization. Unfortunately, there are many cases (mainly on legacy apps) where we couldn't use Node.js and I don't want this issue to prevent us from using Tailwind CSS.

By using SCSS format, I hope that more people especially who have non Node.js apps can start using Tailwind CSS and progressively improve their tech stack to use the original version eventually.

We try to keep this library as close as possible with future development of Tailwind CSS.

## Installation

Using npm:

```
npm install tailwindscss --save
```

or yarn:

```
yarn add tailwindscss
```

## Usage

To use it on your SCSS, you can import entire style like this:

```
@import "tailwindscss";
```

or you can choose to import one by one:

```
@import "tailwindscss/base";
@import "tailwindscss/utilities";
```

## Configuration

By default, it will generate all styles which are equivalent to Tailwind CSS's default configuration. Below is what our configuration looks like.

```

@import 'tailwindscss/src/helper';

$prefix: ''; // Selector prefix;
$separator: '_'; // Separator for pseudo-class and media query modifier

$theme-colors: (
  transparent: transparent,
  black: #000,
); // Theme configuration

$variants-text-color: (responsive, hover, focus); // Variants configuration

$core-plugins-text-color: true; // Set false to disable utility

```

To customize utilities, you need to import your own configuration file at the top of your SCSS file.

```
@import "path-to/tailwind.config.scss";
@import "tailwindscss/base";
@import "tailwindscss/utilities";
```

For starting out, you can run `npx tailwindscss init` to get full configuration.

## Documentation

Head to [the original website](https://tailwindcss.com) for more guideline about utilities. Of course, some sections like installation are not applicable for this library.

## Limitation

Because of SCSS limitation, below features cannot be provided in this library:

- [Plugins](https://tailwindcss.com/docs/plugins)
- [Functions & Directives](https://tailwindcss.com/docs/functions-and-directives)

SCSS does not support several characters like colon (`:`) and backslash (`/`) because it will always be evaluated as language's keywords. For your safety, keep your prefix and separator with dashes (`-`) and underscore (`_`) characters.

## TODO

- [ ] important flag
- [x] responsive
- [x] pseudo-class (hover, focus, focus-within, active and group-hover)
- [x] colors
