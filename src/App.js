import "./App.css";
import Profile from "./Profile/Profile";

function App() {
  const fullName = { name: "Mohamed Seif", LastName: "Mbarki" };
  const bio =
    "A biography is a description of a real person's life, including factual details as well as stories from the person's life. ... The vast majority of biography examples are written about people who are or were famous, such as politicians, actors, athletes, and so on.";
  const profession = "Engineer/WebDevolopper";
  const handleName = (data) => {
    alert(data);
  };
  return (
    <div className="App">
      <Profile
        fullName={fullName}
        bio={bio}
        profession={profession}
        handleName={handleName}
      >
        <img
          style={{ height: "100px", width: "100px", marginLeft: "30%" }}
          src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
          alt="picture"
        />
      </Profile>
    </div>
  );
}

export default App;
