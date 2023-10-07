import styled from "styled-components";

const Wrapper = styled.section`
  .container {
    max-width: 37.5%;
    min-width: 30.3rem;
    margin: 0 auto;
    margin-top: 8rem;
    padding: 0;

    /* background: blue; */
  }

  .title {
    margin-bottom: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title img {
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
  }

  h1 {
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 1rem;
    line-height: 100%;
    margin: 0;
    padding: 0;
    color: white;
  }

  .create-todo {
    padding: 0 2rem;
    background: var(--itemBackGroundColor);
    height: 6.5rem;
    margin: 0 0 2.5rem 0;
    display: flex;
    align-items: center;
  }

  .create-todo button {
    border: none;
    background: blue;
    /* padding: 0.5rem 0.75rem; */

    padding: 0.45rem 1rem;
    border-radius: 3px;
    cursor: pointer;
    /* margin: auto auto; */
    line-height: normal;
    color: white;
    text-transform: uppercase;
  }

  .item-container {
    border-radius: 0.5rem;
    /* background: red; */
    overflow: hidden;
  }

  .input-text {
    background: var(--itemBackGroundColor);

    border: none;
    /* color: white; */
    font-size: 1.8rem;
    /* margin-left: 2.5rem; */
  }
  .input input {
    width: 100%;
    color: var(--textColor);
  }
  .input {
    margin-left: 2.5rem;
    display: flex;
    width: 100%;
  }

  label {
    font-size: 1.4rem;
    white-space: nowrap;
    margin-right: 1rem;
    color: var(--textColor);
  }

  .input-text:focus {
    outline: none;
  }
  .input-text::placeholder {
    opacity: 0.5;
  }

  h1 {
    display: inline;
  }

  .bottom-description {
    display: flex;
    background: var(--itemBackGroundColor);
    height: 6rem;
    padding: 2rem;
    justify-content: space-between;
    font-size: 1.2rem;
    color: var(--textColor);
  }

  .middle-group-description {
    width: 17.5rem;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    color: var(--textColor);
  }

  .whole-middle-group-description {
    background: var(--itemBackGroundColor);
    width: 100%;
    margin-top: 1.5rem;
    border-radius: 0.25rem;
    height: 6rem;
    display: none;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    min-width: 16.5rem;
    color: var(--textColor);
  }

  .item-wrapper {
    min-width: 16.5rem;
    display: flex;
    justify-content: space-between;
  }

  .item-wrapper span:hover {
    color: blue;
  }

  .clear-completed {
    cursor: pointer;
  }
  .clear-completed:hover {
    color: blue;
  }

  .whole-middle-group-description span {
    cursor: pointer;
  }

  .middle-group-description span {
    cursor: pointer;
  }

  .middle-group-description span:hover {
    color: blue;
  }
  .active {
    color: blue;
  }
  @media screen and (max-width: 23.4375em) {
    label {
      font-size: 1.1rem;
    }
    .input {
      margin-left: 1rem;
    }
    .middle-group-description {
      display: none;
    }
  }

  @media screen and (max-width: 67.375em) {
    .middle-group-description {
      display: none;
    }
    .whole-middle-group-description {
      display: flex;
      height: 5rem;
    }
    .bottom-description {
      height: 5rem;
    }
  }
`;

export default Wrapper;
