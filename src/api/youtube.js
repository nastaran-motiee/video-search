import axios from "axios";
const KEY = "this should be a key";

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
