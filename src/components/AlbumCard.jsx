import { Link } from 'react-router-dom'

export default function AlbumCard({ album, toggle, setToggle }) {
    const deleteAlbum = () => {
        fetch (`https://albums-api-cgl.web.app/albums/${album.albumId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'}

        })
        .then(() => setToggle(!toggle))
        .catch(alert)
    }

    return (
        <div className="album-card">
            <Link to={`/albums/${album.albumId}`}>
            <h3 className="album-title">{album.album}</h3>
            <p>{album.artist}, {album.year}</p>
        </Link>
            <button onClick={deleteAlbum}>Delete</button>
        </div>
    )
}