import React, {useState } from "react";

const UserInfo = ({keycloak}) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    id: "",
  });

  keycloak.loadUserInfo().then((userInfo) => {
    setState({
      name: userInfo.name,
      email: userInfo.email,
      id: userInfo.sub,
    });
  });

  return (
    <div className="UserInfo">
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
      <p>ID: {state.id}</p>
    </div>
  );
};

export default UserInfo;
