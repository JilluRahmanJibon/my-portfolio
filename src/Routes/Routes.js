import { createBrowserRouter } from "react-router-dom"
import Blog from "../components/Blog/Blog"
import Home from "../components/Home/Home"
import Root from "../Layout/Root"

const router = createBrowserRouter([
    {
        path: '/', element: <Root />, children: [
            { path: '/', element: <Home /> },
            {path:'/blog',element:<Blog/>}
        ]
    }
])

export default router