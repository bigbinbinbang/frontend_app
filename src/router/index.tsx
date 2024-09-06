/*
 * @Date: 2024-09-03 16:37:32
 * @LastEditTime: 2024-09-05 09:55:09
 * @FilePath: \frontend_app\src\router\index.tsx
 * @Description: 路由配置文件
 */
import React, { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'

const Home = lazy(() => import('@/views/home'))
const About = lazy(() => import('@/views/about'))
const routers = createBrowserRouter([
  {
    path: '',
    element: <Navigate to='/index' />
  },
  {
    path: 'index',
    element: <Home />
  },
  {
    path: 'about',
    element: <About />
  }
])

export default routers
