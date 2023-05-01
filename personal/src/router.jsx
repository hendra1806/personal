import {createBrowserRouter,RouterProvider,Route,Link} from 'react-router-dom'
import About from "./views/About";
import ProjectList from "./views/ProjectList";
import Home from "./views/Home";
import Layout from './components/layout';

const router = createBrowserRouter([
    {
        path:'',
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/projects",
                element:<ProjectList/>,
            },
        ]
    }
])
export default router