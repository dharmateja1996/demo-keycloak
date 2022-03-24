import React, { useState ,useEffect} from "react";
import Keycloak from "keycloak-js";
import UserInfo from "../UserInformation";
import LogOut from "../LogOut";
import './index.css'


const  Secured = () => {
 
  const [state,setState] = useState({ keycloak: null, authenticated: false })

  

  useEffect(() => {
    const keycloak = Keycloak("/keycloak.json");
    keycloak.init({ onLoad: "login-required" }).then((authenticated) => {
      setState({...state, keycloak: keycloak, authenticated: authenticated });
    });
  },[])

  if (state.keycloak) {
    if (state.authenticated)
      return (
        <div className="random-container">
          <p>
            This is a Keycloak-secured component of your application. You
            shouldn't be able to see this unless you've authenticated with
            Keycloak.
          </p>
          <UserInfo keycloak={state.keycloak} />
          <LogOut keycloak={state.keycloak} />
        </div>
      );
    else return <div>Unable to authenticate!</div>;
  }
  return <div>Initializing Keycloak...</div>;
}
export default Secured;
