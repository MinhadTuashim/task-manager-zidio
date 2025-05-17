import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to Task Manager</h1><br></br>
      <p>Organize your tasks efficiently and boost productivity.</p>
      <Link to="/dashboard"><br></br>
        <button>Go to Dashboard</button>
      </Link>
    </div>
  );
};

export default Home;
