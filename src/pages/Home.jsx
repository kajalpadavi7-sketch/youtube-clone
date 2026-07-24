import {useEffect,useState} from "react";

import {getAllVideos} from "../services/videoService";

import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import VideoCard from "../components/VideoCard";


export default function Home(){


const [videos,setVideos]=useState([]);



useEffect(()=>{

    loadVideos();

},[]);



const loadVideos = async()=>{

    try{

        const response = await getAllVideos();

        console.log(response.data);

        setVideos(response.data);

    }
    catch(error){

        console.log(error);

    }

};



return(

<>


<Navbar/>


<div
style={{
padding:"20px",
marginBottom:"80px"
}}
>


<h2>
All Videos
</h2>



<div
style={{
display:"grid",
gridTemplateColumns:
"repeat(auto-fill,minmax(350px,1fr))",
gap:"20px"
}}
>


{

videos.map((video)=>(

<VideoCard

key={video.id}

video={video}

/>

))

}



</div>


</div>


<BottomNav/>


</>

);


}