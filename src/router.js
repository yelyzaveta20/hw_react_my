import {createBrowserRouter, Navigate} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import PageEpisodesRickAndMorti from "./pages/PageEpisodesRickAndMorti";
import PageCharacters from "./pages/PageCharacters";

const router=createBrowserRouter([
    {path:'', element:<MainLayout/>, children:[
            {
                index:true,element:<Navigate to={'episode'}/>
            },
            {
                path:'episode', element: <PageEpisodesRickAndMorti/>
            },
            {
                path:'/character', element:<PageCharacters/>
            }
        ]}
])
export {router}