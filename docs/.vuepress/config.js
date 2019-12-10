const baseHref = !!process.env.BASE_HREF ? process.env.BASE_HREF : '/';
module.exports = {
    title: 'Zero -> Reactive Micro Hero',
    description: 'Zero -> Reactive Micro Hero',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
    ],
    base: baseHref,
    themeConfig: {
        repo: 'daggerok/from-zero-to-reactive-cloud-micro-hero',
        nav: [
            { text: 'Home', link: '/' },
        ],
        sidebar: [
            '/',
        ],
    },
    markdown: {
        lineNumbers: true,
        extendMarkdown: md => {
            md.use(require('markdown-it-vuepress-code-snippet-enhanced'));
        },
    },
    plugins: [
        '@vuepress/blog',
        '@vuepress/back-to-top',
        '@vuepress/last-updated',
        '@vuepress/medium-zoom',
        '@vuepress/nprogress',
    ],
};
