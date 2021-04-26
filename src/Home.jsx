import users from "./users";
import User from "./Components/User";
import "./Styles/Styles.css";

const Home = (props) => {
  return (
    <div className="home">
      <h1>Users at acme</h1>

      <div className="container">
        {users.map((data) => (
          <User userData={data} />
        ))}
      </div>
    </div>
  );
};

export default Home;
