self.$config = {
    home: './home.md',
    nav: [
        {
            title: '首页', path: '/'
        },
        {
            title: '起步', path: '/hi-kitchen/hi-kitchen'
        },
        {
            title: '语法', path: '/hi-kitchen/hi-kitchen'
        },
        {
            title: 'HiUI', type: 'dropdown',
            items: [
                { title: 'HiUI Mobile', path: '/hiui/hiui-m' },
                { title: 'HiUI Pc', path: '/hiui/hiui-pc' }
            ]
        },
        {
            title: 'HiKitchen', type: 'dropdown',
            items: [
                { title: '规范指引', path: '/hikitchen/hikitchen-guide' },
                { title: 'UI组件', path: '/hikitchen/hikitchen-ui' }
            ]
        }
    ]
}
