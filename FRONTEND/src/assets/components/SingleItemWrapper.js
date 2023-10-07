import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--itemBackGroundColor);
  height: 6rem;
  display: flex;
  align-items: center;

  padding: 2rem;

  font-size: 1.8rem;
  border-bottom: 1px solid gray;
  color: var(--textColor);
  p {
    margin-left: 2.5rem;
  }

  input {
    height: 6.5rem;
  }

  img {
    height: 1rem;
    width: 1rem;
    margin-left: auto;
    cursor: pointer;
  }

  .cross-out {
    text-decoration: line-through;
  }

  @media screen and (max-width: 23.4375em) {
    p {
      margin-left: 1rem;
    }
    height: 5rem;
  }
`;

// export const HiddenCheckBox = styled.input.attrs({ type: "checkbox" })`
//   position: absolute;
//   opacity: 1;
//   cursor: pointer;
//   height: 0rem;
//   width: 0rem;
//   background: radial-gradient(circle at center, #007bff, #0056b3);
//   border-radius: 50%;
// `;

export const StyledCheckbox = styled.div`
  display: flex;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;

  border: ${(props) => (props.checked ? "" : "2px solid #b2b7e7")};

  cursor: pointer;
  background: ${(props) =>
    props.checked ? "radial-gradient(circle at center, #007bff, #0056b3)" : ""};

  img {
    width: 1rem;
    height: 1rem;
    margin: auto auto;
  }
`;
