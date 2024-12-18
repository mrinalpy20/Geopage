import React from "react";
import UserList from "../components/UserList";
const Users = () => {
  const USERS = [
    {
      name: "John",
      places: 1,
      image:
        "https://images.pexels.com/photos/28318334/pexels-photo-28318334/free-photo-of-a-sign-on-a-rocky-path-leading-to-a-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 1,
    },
  ];
  return <UserList items={USERS} />;
};

export default Users;
