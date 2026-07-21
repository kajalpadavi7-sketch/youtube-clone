import { useState } from "react";
import api from "../api/axios";

export default function UploadVideo() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("video", video);
    formData.append("thumbnail", thumbnail);

    try {

      const response = await api.post("/videos/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert(response.data);

    } catch (error) {
      console.log(error);
      alert("Upload Failed");
    }
  };

  return (
    <div
      style={{
        width: "450px",
        margin: "40px auto",
      }}
    >
      <h2>Upload Video</h2>

      <form onSubmit={handleUpload}>

        <input
          type="text"
          placeholder="Video Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br /><br />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br /><br />

        <label>Choose Video</label>

        <input
          type="file"
          accept="video/*"
          onChange={(e) => setVideo(e.target.files[0])}
        />

        <br /><br />

        <label>Choose Thumbnail</label>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setThumbnail(e.target.files[0])}
        />

        <br /><br />

        <button type="submit">
          Upload
        </button>

      </form>

    </div>
  );
}