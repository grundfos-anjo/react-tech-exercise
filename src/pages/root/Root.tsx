import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import useUser from "../../provider/user-provider";
import { Paths } from "../../routes";

import { Tile } from "../../components";

import Apple from "./apple.png";
import Orange from "./orange.png";
import Banana from "./Banana.png";

const RootContainer = styled.div`
  padding: 50px;
  text-align: center;
`;
RootContainer.displayName = "RootContainer";
const RootHeader = styled.b`
  display: block;
  margin-bottom: 20px;
`;
RootHeader.displayName = "RootHeader";

const ProductsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 40px;
  justify-content: center;
`;
ProductsContainer.displayName = "ProductsContainer";

const Root = () => {
  const { userContext } = useUser();
  const { logout, userName } = userContext;
  let navigate = useNavigate();

  const logoutOnClick = () => {
    logout();
    navigate(Paths.LOGIN_PATH);
  };
  return (
    <RootContainer>
      {userName !== "" && <RootHeader>WELCOME, {userName}</RootHeader>}
      <ProductsContainer>
        <Tile
          label="Apple"
          onClick={() => {
            console.log("APPLE");
          }}
          image={Apple}
        />
        <Tile
          label="Orange"
          onClick={() => {
            console.log("ORANGE");
          }}
          image={Orange}
        />
        <Tile
          label="Banana"
          onClick={() => {
            console.log("BANANA");
          }}
          image={Banana}
        />
      </ProductsContainer>
      <button onClick={logoutOnClick}>Logout</button>
    </RootContainer>
  );
};

export default Root;
