import { useState, useEffect } from "react"
import axios from "axios"


export default function Principal() {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        axios.get('https://deezerdevs-deezer.p.rapidapi.com/search', 
        {headers: {
            'X-RapidAPI-Key': '0ebebcd5aemsh5c38631760e3de6p1b5386jsn2351963e10ff',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'},
            params: {q: 'eminem'}
        })
        .then((res) => {
            // console.table(res.data.data)
            setTracks(res.data.data)
        })
        .catch((err) => {
            console.log(err)
        })
        console.log(tracks)
    }, []);
    return (
        <>
            <div className="container row">
                {tracks.map((track) => (
                    <div className="card" style={{width: 200}}>
                        <img src={track.album.cover_medium} className="card-img-top" alt="Imagen Album"/>
                        <div className="card-body">
                            <h5 className="card-title">{track.title}</h5>
                            <h6 className="card-title">Artista: {track.artist.name}</h6>
                            <p className="card-text">Album: {track.album.title}</p>
                            <a href="#" className="btn btn-secondary">Add Review</a>
                        </div>
                    </div>
                ))} 
            </div>
        </>
    )
}
