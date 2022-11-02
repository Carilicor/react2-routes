import { useEffect, useState } from 'react';
import AlbumCard from './AlbumCard';


export default function AlbumList() {
    const [albums, setAlbums] = useState()
    const [toggle, setToggle] = useState()
    useEffect(() => {
        fetch(process.env.REACT_APP_ENDPOINT+'/albums')
            //.setToggle(!toggle)
            .then(response => response.json())
            .then(setAlbums)
            .catch(alert)
    }, [toggle])
    return (
        <main className="album-list">
            {!albums
                ? <h2>Loading...</h2>
                : albums.map(album => (
                    <AlbumCard
                        key={album.albumId}
                        album={album} setToggle={setToggle} toggle={toggle}/>
                ))
            }
        </main>

    )
}