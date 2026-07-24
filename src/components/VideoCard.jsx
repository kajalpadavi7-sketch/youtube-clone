const BASE_URL = "https://youtube-clone-backend-fsq5.onrender.com";

export default function VideoCard({ video }) {

    return (

        <div
            style={{
                width: "350px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                background: "#fff"
            }}
        >

            {/* Thumbnail */}

            <img
                src={`${BASE_URL}${video.thumbnailUrl}`}
                alt={video.title}
                style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px"
                }}
            />

            <h3>
                {video.title}
            </h3>

            <p>
                {video.description}
            </p>

            <p>
                Uploaded By: {video.uploadedBy}
            </p>

            <video
                width="100%"
                controls
            >
                <source
                    src={`${BASE_URL}${video.videoUrl}`}
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>

        </div>

    );
}