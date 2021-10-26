const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const path = require('path');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Nocodepdf',
  tagline: 'Code less, Achieve more with our simple to use APIs',
  url: 'https://nocodepdf.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'surepass', // Usually your GitHub org/user name.
  projectName: 'nocodepdf-documentation', // Usually your repo name.
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://nocodepdf.com/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Nocodepdf logo',
          src: 'https://nocodepdf.com/wp-content/uploads/2021/05/New-Project-24.png',
          srcDark: 'https://nocodepdf.com/wp-content/uploads/2021/10/white.png'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          { 
            href: 'https://nocodepdf.com/blog/', 
            label: 'Blog', 
            position: 'left' 
          },
          {
            href: 'https://nocodepdf.com/pricing/',
            label: 'Try for Free',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://nocodepdf.com/blog/',
              },
              {
                label: 'Pricing',
                href: 'https://nocodepdf.com/pricing/',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://surepass.us">Surepass, Inc.</a> Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: ['http', 'uri', 'java', 'python'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
