import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useUser from "../../provider/user-provider";
import { Paths } from "../../routes";

const LoginContainer = styled.div`
  padding: 50px;
  text-align: center;
`;
LoginContainer.displayName = "LoginContainer";

const Login = () => {
  const [username, setUsername] = useState("");

  const { userContext } = useUser();
  const { login } = userContext;
  let navigate = useNavigate();

  const loginOnClick = () => {
    if (username !== "") {
      login(username);
      navigate(Paths.ROOT_PATH);
    }
  };
  return (
    <LoginContainer>
      <input
        type="text"
        placeholder="Username"
        onChange={(event) => setUsername(event.target.value)}
      ></input>
      <button onClick={loginOnClick}>Login</button>
    </LoginContainer>
  );
};

export default Login;
