export default {
    path: '/movie',
    component: () => import('@/views/movie'),
    children:[
        {
            path: 'city',
            component: () => import('@/components/City')
        },{
            path: 'nowPlaying',
            component: () => import('@/components/NowPlaying')
        },{
            path: 'comingSoon',
            component: () => import('@/components/ComingSoon')
        },{
            path: 'searchMovie',
            component: () => import('@/components/SearchMovie')
        },{
            path: '/movie',
            redirect: 'nowPlaying'
        }
    ]
}