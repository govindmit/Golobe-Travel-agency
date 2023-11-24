import styled from "styled-components";
const Wrapper = styled.section`
  border-right: 2px solid whitesmoke;
  width: 343px;
  height: 1500px;
  top: 17rem;
  left: 50px;
  position: absolute;
  .filter {
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 1.5;
    letter-spacing: 0.1039em;
  }
  .price-div {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    color: #112211;
  }
  .icon {
    color: black;
    border: none;
    background-color: transparent;
  }
  .box-div {
    border-bottom: 2px solid whitesmoke;
    height: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #112211;
  }
  .first-box {
    display: flex;
    color: #112211;
  }
  .btn {
    height: 1rem;
    border: none;
    background-color: transparent;
    position: absolute;
    left: 17.5rem;
  }
  .rating-btn {
    padding: 4px 14px 9px 12px;
    width: 40px;
    height: 32px;
    background: transparent;
    border-radius: 3px;
    border: 1px solid #8dd3bb;
  }
  .second-box {
    height: 4rem;
    width: 15rem;
    display: flex;
    justify-content: inherit;
  }
  .third-box {
    height: 15rem;
    /* border-bottom:2px solid whitesmoke; */
    margin-top: 20px;
    color: #112211;
  }
  .checkbox {
    height: 13rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: absolute;
    left: 2rem;
  }
  .checkbox {
    span.MuiTypography-root.MuiTypography-body1.MuiFormControlLabel-label.css-ahj2mt-MuiTypography-root {
      font-size: smaller;
      font-family: system-ui;
      color: #112211;
    }
  }
  .show-more {
    font-weight: 700;
    font-size: 14px;
    line-height: 17.07px;
    color: #ff8682;
    background: transparent;
  }
`;
export default Wrapper;
