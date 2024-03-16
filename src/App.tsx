import "./App.css";
import userData from "./data/userData.json";
import friends from "./data/friends.json";
import Profile from "../src/components/Profile/Profile.jsx";
import FriendList from "../src/components/FriendList/FriendList.jsx";

function App() {
  const { username, tag, location, avatar, stats } = userData;
  const { avatarFriends, nameFriends, isOnline, id } = friends;
  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendList
        avatarFriends={avatarFriends}
        name={nameFriends}
        isOnline={isOnline}
        key={id}
      />
    </>
  );
}

export default App;
