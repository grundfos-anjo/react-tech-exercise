import styled from "styled-components";

import { CartButton } from "../cart-button";
import useUser from "../../provider/user-provider";

export type TileContainerProps = {
  label: string;
  onClick: () => void;
  image: any;
};
const TileContainer = styled.div`
  padding: 20px;
  display: flex;
  border: 1px solid black;
  flex-direction: column;
`;
TileContainer.displayName = "TileContainer";

const TileImage = styled.img`
  float: left;
  width: 200px;
  height: 200px;
  object-fit: contain;
`;
TileImage.displayName = "TileImage";

const TileLabel = styled.h5`
  display: block;
  margin: 5px 0 10px;
`;
TileLabel.displayName = "TileLabel";

const Tile = ({ label, onClick, image }: TileContainerProps) => {
  const { userContext } = useUser();
  const { isAuthenticated } = userContext;
  const cartOnClick = () => {
    console.log("CART");
  };
  return (
    <TileContainer>
      <TileImage src={image} />
      <TileLabel>{label}</TileLabel>
      <button onClick={onClick}>Add to Cart</button>
    </TileContainer>
  );
};

export default Tile;
