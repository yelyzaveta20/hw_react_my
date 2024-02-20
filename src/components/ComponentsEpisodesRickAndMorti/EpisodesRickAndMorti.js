import {useEffect, useState} from "react";

import {episodesServise} from "../../services/episodesServise";
import EpisodeRickAndMorti from "./EpisodeRickAndMorti";
import {useSearchParams} from "react-router-dom";

const EpisodesRickAndMorti = () => {
    const [episodes, setEpisodes] = useState([])
    const [query, setQuery] = useSearchParams({page: '1'});
    const [prevNext, setPrevNext] = useState({prev: null, next: null})
    useEffect(() => {
        episodesServise.getAll(query.get('page')).then(({data})=>{
            setEpisodes(data.results)
            setPrevNext({prev: data.prev, next: data.next})
            console.log(data.results);
        })
    }, [ query]);

    const prev = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') - 1).toString())
            return prev
        })
    }

    const next = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') + 1).toString())
            return prev
        })
    }
    return (
        <div>
            {episodes.map(episode => <EpisodeRickAndMorti key={episode.id} episode={episode}/>)}
            <button  onClick={prev}>prev</button>
            <button onClick={next}>next</button>
        </div>
    );
};

export default EpisodesRickAndMorti;