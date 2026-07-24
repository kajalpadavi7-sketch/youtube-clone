
import api from "../api/axios";


export const getAllVideos =()=>{

    return api.get("/videos");

};