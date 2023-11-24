import styled from "styled-components";

const Wrapper = styled.div`
  .root {
    width: 95%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(0, 35.19, 76.5, 0.63) 0%,
      rgba(0, 35.19, 76.5, 0) 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: theme.spacing(1);
    position: relative;
  }
  .content {
    position: absolute;

    bottom: 0px;
    width: 100%;
    height: 90%;
    background: linear-gradient(
      90deg,
      rgba(0, 35.19, 76.5, 0.63) 0%,
      rgba(0, 35.19, 76.5, 0) 100%
    );
    /* border-radius: 24px; */
  }
  .Box-content {
    padding-top: 80px;
    padding-bottom: 120px;
    padding-left: 126px;
    padding-right: 174px;
  }
  .title {
    width: 440px;
    color: white;
    font-size: 45px;
    font-family: "TradeGothic LT Extended";
    font-weight: 700;
    word-wrap: break-word;
  }
  .subtitle {
    width: 375px;
    color: white;
    font-size: 20px;
    font-family: "Montserrat";
    font-weight: 500;
    word-wrap: break-word;
  }
`;
export default Wrapper;
