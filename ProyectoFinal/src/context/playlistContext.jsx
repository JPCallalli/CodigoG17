import { createContext, useState, useEffect } from "react";

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
    const [playlistItems, setPlaylistItems] = useState([]);

    const addPlaylistItem = (item) => {     
        const isItemInPlaylist = playlistItems.findIndex(playlistItem => playlistItem.id === item.id);
          
        if(isItemInPlaylist === -1){
            setPlaylistItems([...playlistItems, item]);
        }else {
            alert("Esta cancion ya esta en tus Favoritos ");
        }                    
    }

    return (
        <PlaylistContext.Provider value={{ playlistItems, addPlaylistItem }}>
            {children}
        </PlaylistContext.Provider>
    )
}
export { PlaylistContext, PlaylistProvider };