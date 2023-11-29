import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 92%;
  margin: 0px;
  height: 100%;
  background: white;
  box-shadow: 0px 4px 16px rgba(141, 211, 187, 0.15);
  .card {
    position: relative;
    bottom: 90px;
    padding: 4px;
    border-radius: 16px;
    left: 50px;
  }
  .buttonStyles {
    color: black;
    padding: 12px;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
  }
  .flight-search-input {
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
  }
  .buttonStyles.active {
    &:after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 10%;
      width: 100%;
      height: 3px;
      background-color: #8dd3bb;
    }
  }
  .typeDiv {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .buttonDiv {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    position: relative;
    justify-content: flex-end;
  }
  .showFlight {
    color: black;
    align-items: center;
    background-color: #8dd3bb;
  }
  .showFlight:hover {
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
  .calender-view{
    display: flex;
    position: relative;
    top: 3%;
    right: 24%;
    height: 160px;
    z-index: 1000;
    /* bottom: 59%; */
    gap: 4px;
  }
`;

export default Wrapper;