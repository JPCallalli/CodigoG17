import { useEffect, useState } from "react";
import { servicioDeezer } from "../services/servicioDeezer";


export default function Card() {
  const [tracks, setTracks] = useState([]);
  
  useEffect(() => {
    servicioDeezer()
    .then((res) => {
      console.log(res);
      
      setTracks(res);
    })
    .catch ((err) => {
      console.log("Error al obtener los datos");
    })
    
  },[])

  return (
    <div className="container grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 justify-items-center justify-center gap-3 mt-10 mx-10">
        {/* {tracks.map((track) => (
            <div className="relative max-w-60 min-w-40 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 hover:shadow-xl transition-all" key={track.id}>
                <img className="rounded-t-lg mx-auto w-full h-56" src={track.album.cover_medium} alt=" Imagen del track" />
                
                <div className="block text-wrap p-5">
                    
                    <h3 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {track.title}</h3>

                    <p className="mb-1 font-bold tracking-tight text-gray-400 dark:text-white">{track.artist.name}</p>
                    <p className=" text-balance mb-2 text-sm font-bold tracking-tight text-gray-400 dark:text-white">{track.album.title}</p>

                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                    Add Review
                    </a>
                </div>
            </div>
        ))} */}

        {tracks.map((track) => (
            <div className="bg-gray-900 shadow-lg rounded p-3" key={track.id}>
              <div className="group relative">
                <img className="w-full md:w-72 block rounded" src={track.album.cover_medium} alt="" />
                <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                  <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                      <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                  </button>
      
                  <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                    </svg>
                  </button>
      
                  <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-balance text-white text-lg">{track.title}</h3>
                <p className="text-balance text-gray-400">{track.artist.name}</p>
              </div>
          </div>
        ))}
    </div>
    // <div className="container row">
    //     {tracks.map((track) => (
    //         <div className="card" style={{width: 200}}>
    //             <img src={track.album.cover_medium} className="card-img-top" alt="Imagen Album"/>
    //             <div className="card-body">
    //                 <h5 className="card-title">{track.title}</h5>
    //                 <h6 className="card-title">Artista: {track.artist.name}</h6>
    //                 <p className="card-text">Album: {track.album.title}</p>
    //                 <a href="#" className="btn btn-secondary">Add Review</a>
    //             </div>
    //         </div>
    //     ))}
    // </div>
  );
}
