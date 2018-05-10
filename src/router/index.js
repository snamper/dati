import Vue from 'vue'
import Router from 'vue-router'

//
import index from 'page/index'
import subject from 'page/subject/index'
import content from '@/components/timu/timu'
import ret from 'page/ret/ret'

Vue.use(Router)

const routes = [
    {
        path:'',
        name:'index',
        component:index
    },
    {
        path:'/subject',
        component:subject,
        children:[
            {
                path:'',
                component:content
            }
        ]
    },
    {
        path:'/result',
        name:'result',
        component:ret
    }
]
export default new Router({
    routes
})
