({
    block: 'page',
    title: 'Тренировка',
    head: [
        { elem: 'css', url: '_index.css' }
    ],
    scripts: [{ elem: 'js', url: '_index.js' }],
    mods: { theme: 'normal' },
    content: [

        {
            block: 'rating',
            name: 'rating-1'
        },

        {
            block: 'rating',
            mods: { disabled: 'yes' },
            name: 'rating-2',
            vote: 3
        },

        {
            block: 'progress-bar',
            progress: 20
        }

    ]
})
