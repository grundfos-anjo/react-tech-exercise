import styled from "styled-components";

import { CartButton } from "../cart-button";
import useUser from "../../provider/user-provider";

export type HeaderContainerProps = {
  label: string;
};
const HeaderContainer = styled.div`
  background-color: gray;
  padding: 20px;
  display: flex;
`;
HeaderContainer.displayName = "HeaderContainer";
const HeaderLabel = styled.h5`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 10px;
  flex-grow: 1;
`;
HeaderLabel.displayName = "HeaderLabel";

const Header = ({ label }: HeaderContainerProps) => {
  const { userContext } = useUser();
  const { isAuthenticated } = userContext;
  const cartOnClick = () => {
    console.log("CART");
  };
  return (
    <HeaderContainer>
      <HeaderLabel>{label}</HeaderLabel>
      {isAuthenticated() && <CartButton onClick={cartOnClick} />}
    </HeaderContainer>
  );
};

export default Header;
