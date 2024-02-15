import MainLayuot from "./layout/MainLayuot";
import {createBrowserRouter, Navigate} from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import {usersService} from "./services/usersService";
import PostsPage from "./pages/PostsPage";
import PostsDetailsPage from "./pages/PostsDetailsPage";
import CommentsPage from "./pages/CommentsPage";


const router=createBrowserRouter([
    {
        path:'', element:<MainLayuot/>, children:[
            {
              index:true,element: <Navigate to={'users'}/>
            },
            {
                path:'users', element:<UsersPage/>, loader: () => usersService.getAll(),children:[
                    {
                        path:':id', element:<UserDetailsPage/>,loader:({params:{id}})=>usersService.getById(id),children:[
                            {
                                path:'posts', element:<PostsPage/>, children:[
                                    {
                                        path:'details', element:<PostsDetailsPage/>,children:[
                                            {
                                                path:'comments', element:<CommentsPage/>
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
])
export {router}