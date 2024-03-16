import "./App.css";
import userData from "./data/userData.json";
import friends from "./data/friends.json";
import Profile from "../src/components/Profile/Profile.jsx";
import FriendList from "../src/components/FriendList/FriendList.jsx";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
}

export default App;
