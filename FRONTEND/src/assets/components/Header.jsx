import { useGlobalContext } from "../context/context";
import lightPhoto from "../images/bg-desktop-light.jpg";
import darkPhoto from "../images/bg-desktop-dark.jpg";

import { ImageHeaderStyle, Wrapper } from "./HeaderWrapper";

const Header = () => {
  const { dark } = useGlobalContext();
  return (
    <Wrapper>
      <ImageHeaderStyle dark={dark}>
        <img
          src={dark ? darkPhoto : lightPhoto}
          alt="photo"
          className={dark ? "alt-image" : ""}
        />
      </ImageHeaderStyle>
    </Wrapper>
  );
};

export default Header;
