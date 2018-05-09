import Vue from 'vue'
import Router from 'vue-router'

//
import index from 'page/index'
import subject from 'page/subject/index'

Vue.use(Router)

const routes = [
    {
        path:'',
        name:'index',
        component:index
    },
    {
        path:'/subject',
        component:subject
        // chindren:[
        //     {
        //         path:'',
        //         component:resolve=>require([''],resolve)
        //     }
        // ]
    }
]
export default new Router({
    routes
})
