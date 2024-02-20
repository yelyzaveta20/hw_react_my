import EpisodesRickAndMorti from "../components/ComponentsEpisodesRickAndMorti/EpisodesRickAndMorti";
import {Outlet} from "react-router-dom";

const PageEpisodesRickAndMorti = () => {
    return (
        <div>
            <Outlet/>
        <EpisodesRickAndMorti/>
        </div>
    );
};

export default PageEpisodesRickAndMorti;