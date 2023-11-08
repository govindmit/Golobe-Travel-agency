import styled from "styled-components";

const Wrapper = styled.div`
margin-top: 40px;
  display: flex;
  flex-direction: row;

  .image {
    width: 560px;
    height: 520px;
    left: 0px;
    top: 0px;
    border-radius: 20px;
  }
  .box-div {
    position: absolute;
    padding: 22px;
    bottom: 0px;
    width: 102%;
    height: 38%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(18, 18, 18, 0.75) 49%
    );
    border-radius: 24px;
  }
  .box-container {
    padding: 35px;
  }
  .box-title {
    text-align: center;
    color: white;
    font-size: 40px;
    font-family: TradeGothic LT Extended;
    font-weight: 700;
    word-wrap: break-word;
  }
  .box-desc {
    text-align: center;
    color: white;
    font-size: 18px;
    font-family: Montserrat;
    font-weight: 400;
    word-wrap: break-word;
  }
  .box-btn {
    background: #8dd3bb;
    left: 150px;
    bottom: -15px;
    padding: 8px 16px 8px 16px;
    height: 48px;
    border: 1px solid black;
    border-radius: 4px;
    color: #112211;
    font-size: 14px;
    font-family: "Montserrat";
    font-weight: 500;
    text-transform: none;
  }
  .box-btn:hover {
    background: #8dd3bb;
    border: 1px solid black;
  }
  .icon {
    height: 25px;
    margin-right: 5px;
  }
`;
export default Wrapper;
