export default function VideoCard({video}) {

    return (

        <div
            style={{
                width:"350px",
                border:"1px solid #ddd",
                borderRadius:"10px",
                padding:"15px",
                background:"#fff"
            }}
        >


            {/* Thumbnail */}

            <img
                src={`http://localhost:8080${video.thumbnailUrl}`}
                alt={video.title}
                style={{
                    width:"100%",
                    height:"200px",
                    objectFit:"cover",
                    borderRadius:"10px"
                }}
            />


            <h3>
                {video.title}
            </h3>


            <p>
                {video.description}
            </p>


            <p>
                Uploaded By:
                {video.uploadedBy}
            </p>


            <video
                width="100%"
                controls
            >

                <source
                    src={`http://localhost:8080${video.videoUrl}`}
                    type="video/mp4"
                />

            </video>


        </div>

    );
}