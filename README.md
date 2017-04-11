# Check Yo Self
>  A site to check the grammar of your markdown blog posts/texts.

[![Travis](https://img.shields.io/travis/twhite96/checkyoself.svg)](https://travis-ci.org/twhite96/checkyoself)
[![Twitter Follow](https://img.shields.io/twitter/follow/TiffanyW_412.svg?style=social&label=Follow)](https://twitter.com/TiffanyW_412)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

Frustrated by Grammarly and Hemingway apps' inability to process markdown blog posts, I decided to make my own site to process markdown blog posts or other texts. I settled on [Material Design Lite](https://getmdl.io/index.html) for the UI because I am lazy and like colorful things. 

## Installation

No installation needed. Just fork the repo, install dev dependencies, and get running.

## Usage example

Coming soon.[^1]

[^1]: Still working on it.

## Development setup

There are a few dependencies and I want to thank [@btford](https://github.com/btford) and the [@NaturalNode](https://github.com/NaturalNode) Organization for their awesome tools which without them this wouldn't be as easy.

Fork the repo, and add your own `package.json` file with:

```sh
npm init
```
and fill in all the gritty details.

The site uses Brian Ford's `write-good` linter for native English and NaturalNode's `natural` for the tokenizers in its Node nlp module.

To install `write-good`:

```sh
npm install write-good
```
...and natural:

```sh
npm install natural
```

Usage examples are coming. Too many ideas. Plenty of feature creep. 👎🏽😩

## Release History

* 0.0.1
    * Work in progress

## Meta

Tiffany White – [@TiffanyW_412](https://twitter.com/TiffanyW_412)  email: <hey@tiffanyrwhite.com>

Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/twhite96/checkyoself](https://github.com/twhite96/checkyoself)

