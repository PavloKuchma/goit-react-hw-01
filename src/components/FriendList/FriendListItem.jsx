import React from "react";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className="">
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p>
        {isOnline ? (
          <span className="isonline">Online</span>
        ) : (
          <span className="isoffline">Offline</span>
        )}
      </p>
    </div>
  );
};

export default FriendListItem;
