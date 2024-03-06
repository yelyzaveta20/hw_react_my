import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {episodeActions} from "../../store/slice/episodeSlice";
import {Episode} from "./Episode";
import {useSearchParams} from "react-router-dom";
import {EpisodePaginations} from "./EpisodePaginations";


const EpisodesList = () => {
    const {episodes}=useSelector((state) => state.episodes)
    const dispatch = useDispatch();
    const [query, setQuery]=useSearchParams({page:'1'})
    const page=query.get('page')

    useEffect(() => {
        dispatch(episodeActions.getAllEpisodes(page))
    }, [dispatch,page]);
    return (
        <div>
            {episodes.map(episode=><Episode key={episode.id} episode={episode}/>)}
            <EpisodePaginations/>
        </div>
    );
};

export {EpisodesList} ;