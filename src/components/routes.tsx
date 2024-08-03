import { createBrowserRouter } from 'react-router-dom'
import HomePage from './HomePage'
import Layout from './Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <HomePage /> }],
  },
])

export default router
