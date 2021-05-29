
import React, { lazy } from 'react'

const Home = lazy(() => import('../views/Home'))
const NavBarUI = lazy(() => import('../views/NavbarUI'))

const routes = [
    {
        path: "/",
        exact:true,
        name:"Home",
        component:Home,
        layout: 'LayoutOne'
    },
    {
        path: "/nav-ui",
        name:"NavBarUI",
        exact:true,
        component:NavBarUI,
        layout: 'LayoutTwo'
    }
]

export default routes;