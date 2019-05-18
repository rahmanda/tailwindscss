# Tailwind SCSS

SCSS version of Tailwind CSS for people who don't use modern module bundler (work in progress).

## Why??

The original Tailwind CSS use PostCSS for its CSS preprocessor. Therefore, we have to use Node.js module bundler (Webpack, Rollup etc) in order to get fully control over Tailwind's customization. Unfortunately, there are many cases (mainly on legacy apps) where we couldn't use Node.js and I don't want this issue to prevent us from using Tailwind CSS.

By using SCSS format, I hope that more people especially who have non Node.js apps can start using Tailwind CSS and progressively improve their tech stack to use the original version eventually.

## Installation

Using npm:

```
npm install tailwindscss --save
```

or yarn:

```
yarn add tailwindscss
```

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

By default, it will generate all styles which are equivalent to Tailwind CSS's default configuration.

To customize utilities...
