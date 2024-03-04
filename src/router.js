import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./layuots/MainLayout";

import CarPage from "./pages/CarPage";

const router=createBrowserRouter([
    {
        path:'', element:<MainLayout/>, children:[
            {
                index:true, element:<Navigate to={'carsform'}/>
            },
            {
                path:'carsform', element:<CarPage/>
            }
        ]
    }
])
export {router}