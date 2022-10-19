import axios from "axios";
const KEY = "REPLACE WITH YOUTUBE API KEY";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        type: 'video',
        q: "surfing",
        key: KEY
    }
});
