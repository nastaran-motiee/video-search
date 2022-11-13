import {useState, useEffect} from "react";
import youtube from "../api/youtube";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (userInput) => {
        try {
            const response = await youtube.get("/search", {
                params: {
                    q: userInput
                }
            });

            setVideos(response.data.items);
          
        } catch (error) {
            console.error(error);
        }
    };

    return [videos, search];
};


export default useVideos;