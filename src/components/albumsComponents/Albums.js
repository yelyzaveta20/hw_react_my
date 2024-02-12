import {useEffect, useState} from "react";
import {albumsServices} from "../../servises/albumsServices";
import Album from "./Album";

const Albums = () => {
    const [albums, setAlbums] = useState([])
    useEffect(() => {
        albumsServices.getAll.then(({data})=>setAlbums(data))
    }, []);
    return (
        <div>
            {albums.map(album=><Album key={album.id} album={album}/>)}
        </div>
    );
};

export default Albums;