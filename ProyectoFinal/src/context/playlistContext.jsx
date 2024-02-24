import { createContext, useState, useEffect } from "react";

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
    const [playlistItems, setPlaylistItems] = useState([]);

    const addPlaylistItem = (item) => {
        
        for (let i = 0; i < playlistItems.length; i++) {
            if(playlistItems[i].id === item.id){
                return "Ya esta en la Playlist";
               }
                setPlaylistItems([...playlistItems, item]);
            
        }
                   
    }

    return (
        <PlaylistContext.Provider value={{ playlistItems, addPlaylistItem }}>
            {children}
        </PlaylistContext.Provider>
    )
}
export { PlaylistContext, PlaylistProvider };