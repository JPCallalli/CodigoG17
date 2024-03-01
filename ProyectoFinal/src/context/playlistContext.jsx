import { createContext, useState, useEffect } from "react";

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
    const [playlistItems, setPlaylistItems] = useState([]);

    const addPlaylistItem = (item) => {       
                
        setPlaylistItems([...playlistItems, item]);
                   
    }

    return (
        <PlaylistContext.Provider value={{ playlistItems, addPlaylistItem }}>
            {children}
        </PlaylistContext.Provider>
    )
}
export { PlaylistContext, PlaylistProvider };