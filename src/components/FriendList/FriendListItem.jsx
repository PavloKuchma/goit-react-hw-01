import React from "react";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p>
        Friend status: {isOnline ? <span>Online</span> : <span>Offline</span>}
      </p>
    </div>
  );
};

export default FriendListItem;
