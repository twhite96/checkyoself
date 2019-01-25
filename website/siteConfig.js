/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/logo.svg',
    infoLink: 'http://github.com/twhite96/checkyoself',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Check Yo Self' /* title for your website */,
  tagline: 'An app to check the grammar and spelling of your markdown blog posts.',
  url: 'https://checkyoself.netlify.com' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'checkyoself',
  organizationName: 'twhite96',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'doc1', label: 'Getting Started'},
    {doc: 'doc2', label: 'Usage'},
    {doc: 'doc3', label: 'API'},
    {blog: true, label: 'Blog'},
    {href: 'https://github.com/twhite96/checkyoself', label: 'GitHub'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/chys.png',
  footerIcon: 'img/chys.svg',
  favicon: 'img/favicon.ico',

  /* colors for website */
  colors: {
    primaryColor: '#06D7D9',
    secondaryColor: '#09A7A1',
  },

  /* custom fonts for website */
  fonts: {
    myFont: [
      "Roboto",
      "Sans Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Tiffany White',

  // highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
  //   theme: 'atelier-dune-dark',
  // },

  usePrism: ['jsx', 'js'],

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/logo.png',
  twitterImage: 'img/logo.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/twhite96/checkyoself',
  twitter: 'true',
  twitterUsername: 'TiffanyW_412',
  scrollToTop: true,
};

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',

module.exports = siteConfig;
