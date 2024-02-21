import {createBrowserRouter, Navigate} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegistrerPage from "./pages/RegistrerPage";

import CarsPage from "./pages/CarsPage";
import {AuthLayout, MainLayout, PublicLayout} from "./layout";




const router=createBrowserRouter([
    {
        path:'', element:<MainLayout/>, children:[
            {
                index: true, element:<Navigate to={'login'}/>
            },
            {
                element:<PublicLayout/>, children:[
                    {
                        path:'login', element:<LoginPage/>
                    },
                    {
                        path:'register', element:<RegistrerPage/>
                    }
                ]
            },
            {
                element:<AuthLayout/>,children:[
                    {
                        path: 'cars', element: <CarsPage/>
                    }
                ]
            }
        ]
    }
])
export {router}