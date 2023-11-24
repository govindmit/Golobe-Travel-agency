import { styled } from "styled-components";

const Wrapper = styled.div`
  width: fit-content;
  height: 100%;
  background: white;
  box-shadow: 0px 4px 16px rgba(141, 211, 187, 0.15);
  margin-inline: 95px;
  .card {
    position: relative;
    bottom: 96px;
    left: 88px;
    border-radius: 16px;
  }
  .buttonStyles {
    color: black;
    margin: 8px;
    gap: 8px;
    padding: 12px;
    display: flex;
    align-items: center;
  }
  .typeDiv {
    display: flex;
    flex-direction: row; // Correct the typo here
    align-items: center; // Center items vertically
  }
  .buttonDiv {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    left: 80%;
  }
  .showFlight {
    color: black;
    margin: 8px;
    gap: 8px;
    padding: 12px;
    display: flex;
    align-items: center;
    background-color: #8dd3bb;
  }
  .textDiv {

    width: 100%;
    color: #112211;
    font-size: 20px;
    font-family: Montserrat;
    font-weight: 600;
    word-wrap: break-word;
  }
`;
export default Wrapper;
