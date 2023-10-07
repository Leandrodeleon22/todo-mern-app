import styled from "styled-components";
import desktopPhoto from "../images/bg-desktop-light.jpg";
import mobilePhoto from "../images/bg-mobile-light.jpg";
import darkMoblieDesktop from "../images/bg-mobile-dark.jpg";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;

  /* img {
    content: url(${desktopPhoto});
    display: block;
    width: 100%;
  }

  @media screen and (max-width: 23.4375em) {
    img {
      content: url(${mobilePhoto});
      object-fit: cover;
      height: 20rem;
      object-position: 30% 50%;
    }
  } */
`;

export const ImageHeaderStyle = styled.div`
  img {
    display: block;
    width: 100%;
    transition: var(--darkModeTransition);
  }
  .alt-image {
    opacity: 1;
  }

  @media screen and (max-width: 23.4375em) {
    img {
      /* content:  url(${mobilePhoto}); */
      content: ${({ dark }) =>
        // dark ? `url(${mobilePhoto})` : `url(${darkMoblieDesktop})`};
        dark ? `url(${darkMoblieDesktop})` : `url(${mobilePhoto})`};
      object-fit: cover;
      height: 20rem;
      object-position: 30% 50%;
    }
  }
`;
