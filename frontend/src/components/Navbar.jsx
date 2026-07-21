import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      style={{
        height: "60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <h2>YouTube Clone</h2>

      <input
        type="text"
        placeholder="Search"
        style={{
          width: "350px",
          padding: "8px",
          borderRadius: "20px",
        }}
      />

      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/register">
          <button style={{ marginLeft: "10px" }}>
            Register
          </button>
        </Link>
      </div>

      <Link to="/upload">
    <button>Upload</button>
</Link>
    </div>
  );
}