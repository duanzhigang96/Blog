module.exports = {
    "title": "卡夫卡",
    "description": "kafuka",
    "dest": "public",
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "/favicon.ico"
            }
        ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ]
    ],
    "theme": "reco",
    "themeConfig": {
        vssueConfig: {
            platform: 'github',
            owner: 'kafuka',
            repo: 'Blog',
            clientId: '11a892f1b47a780dbfad',
            clientSecret: '66c06a53c73add4bf3a829ddde9a77a94655791a ',
        },
        "nav": [{
                "text": "Home",
                "link": "/",
                "icon": "reco-home"
            },
            {
                "text": "TimeLine",
                "link": "/timeline/",
                "icon": "reco-date"
            },
            {
                "text": "Docs",
                "icon": "reco-message",
                "items": [{
                    "text": "Hello Wrold",
                    "link": "/docs/theme-reco/"
                }]
            },
            {
                "text": "Contact",
                "icon": "reco-message",
                "items": [{
                    "text": "GitHub",
                    "link": "https://github.com/duanzhigang96",
                    "icon": "reco-github"
                }]
            }
        ],
        "sidebar": {
            '/algorithm/': [
                '',
                'leetcode01',
                'leetcode02',
            ],
        },
        "type": "blog",
        "blogConfig": {
            "category": {
                "location": 2,
                "text": "Category"
            },
            "tag": {
                "location": 3,
                "text": "Tag"
            }
        },
        "friendLink": [{
                "title": "Google",
                "desc": "谷歌",
                "email": "",
                "link": "https://www.google.com/"
            },
            {
                "title": "vuepress-theme-reco",
                "desc": "A simple and beautiful vuepress Blog & Doc theme.",
                "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                "link": "https://vuepress-theme-reco.recoluan.com"
            }
        ],
        "logo": "/logo.png",
        "search": true,
        "searchMaxSuggestions": 10,
        "lastUpdated": "Last Updated",
        "author": "kafuka",
        "authorAvatar": "https://avatars.githubusercontent.com/u/56813828?s=400&u=46b36be613fac11971920be17d89a6b425d66aa1&v=4",
        "record": "京ICP备2021xxxx号",
        "recordLink": "https://beian.miit.gov.cn",
        "cyberSecurityRecord": '京公网安备xxxxxx',
        "cyberSecurityLink": 'http://www.beian.gov.cn/xxxx',
        "startYear": "2021"
    },
    "markdown": {
        "lineNumbers": true
    }
}