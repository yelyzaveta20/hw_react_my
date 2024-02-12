import {createBrowserRouter, Navigate} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AlbumPages from "./pages/AlbumPages";
import CommentPages from "./pages/CommentPages";
import TodosPages from "./pages/TodosPages";
import PostDetailsPage from "./pages/PostDetailsPage";

const router=createBrowserRouter([
    {
        path:'',
        element:<MainLayout/>,
        children:[
            {
                index:true, element:<Navigate to={'todos'}/>
            },
            {
                path:'todos',element:<TodosPages/>
            },
            {
                path:'albums', element:<AlbumPages/>
            },
            {
                path:'comments', element:<CommentPages/>, children:[
                    {path:'posts', element:<PostDetailsPage/>}
                ]
            }
        ]
    }
])
export {router}