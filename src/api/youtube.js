import axios from "axios";
const KEY = "AIzaSyAehWst_ymmr9W_TI3mTGky93i9REVZogQ";

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