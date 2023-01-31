import { defineConfig } from 'vitepress' 

export default defineConfig({
    lang: "ch-ZH",
    title: "SourceZhong's Blog",
    description: "SourceZhong's Blog",
    head: [
        [
            "link",
            {
                rel: "icon",
                type: "image/svg",
                href: "/blog-icon.svg"
            },
        ]
    ],
    themeConfig: {
        logo: "/blog-icon.svg",
    }
})