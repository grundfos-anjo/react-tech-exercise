import { useState } from "react";
import styled from "styled-components";
import SvgCart from "./SvgCart";

export type CartButtonContainerProps = {
  onClick: () => void;
};
const CartButtonContainer = styled.div``;
CartButtonContainer.displayName = "CartButtonContainer";

const CartBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
`;
CartBtn.displayName = "CartBtn";

const CartButtonIcon = styled.img`
  height: 40px;
  width: 40px;

  & svg {
    width: 30px;
  }
`;
CartButtonIcon.displayName = "CartButtonIcon";

const CartCounter = styled.span`
  position: absolute;
  right: -5px;
  top: -10px;
  background: #a10101;
  color: white;
  width: 15px;
  height: 15px;
  font-weight: bold;
  border-radius: 10px;
  padding: 2px;
`;
CartCounter.displayName = "CartCounter";

const CartButton = ({ onClick }: CartButtonContainerProps) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <CartButtonContainer>
      <CartBtn onClick={onClick}>
        <SvgCart fill="black" width="30" />
        {itemCount > 0 && <CartCounter>{itemCount}</CartCounter>}
      </CartBtn>
    </CartButtonContainer>
  );
};

export default CartButton;
