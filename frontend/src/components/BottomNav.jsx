import { Link } from "react-router-dom";

export default function BottomNav() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        padding: "12px",
        borderTop: "1px solid #ddd",
        background: "white",
      }}
    >
      <Link to="/">🏠 Home</Link>

      <Link to="/">▶ Shorts</Link>

      <Link to="/upload">➕ Upload</Link>

      <Link to="/">📺 Subscriptions</Link>

      <Link to="/">👤 You</Link>
    </div>
  );
}