import {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import Header from "../components/Header"
import AlbumCard from '../components/AlbumCard'

export default function SingleAlbums() {
    const { albumId } = useParams()
    const [album, setAlbum] = useState()
    useEffect(() =>{
        fetch('https://albums-api-cgl.web.app/albums')
        .then(response => response.json())
        .then(data => {
            const _album = data.find(album => album.albumId === albumId)
            setAlbum(_album)
        })
        .catch(alert)
    },[albumId])
    return (
        <>
            <Header title={album ? album.album : 'loading...'} />
            <Link to="/">&lt; Back</Link>
            {album
            ? <AlbumCard album={album} />
            : null
            }
            
        </>
    )
}