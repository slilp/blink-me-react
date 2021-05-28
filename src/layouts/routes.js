
import React, { lazy } from 'react'

const Home = lazy(() => import('../views/Home'))

const routes = [
    {
        path: "/home",
        name:"Home",
        component:Home
    }
]

export default routes;