import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
    </nav>
  );
};

const navStyle = {
  background: "#222",
  display: "flex",
  justifyContent: "space-evenly",
  padding: "15px",
  borderRadius: "8px",
  marginBottom: "20px",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  flex: 1,
  textAlign: "center",
  padding: "10px 0",
  fontSize: "18px",
  fontWeight: "bold",
};

export default Navbar;
