import styled from "styled-components";

const Wrapper = styled.div`
  .image-box {
    /* position: relative;
    left: 4rem; */
    /* box-shadow: 0px 4px 16px rgba(17, 34, 17, 0.05); */
    margin-left: 65px;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
  }
  .list-image {
    position: relative;
    left: 345px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    width: 300px;
    height: 300px;
    align-self: stretch;
  }
  .small-div {
    position: relative;
    top: 10px;
    left: 48%;
    padding: 4px 8px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 4px;
    font-size: 12px;
    font-family: Montserrat;
    font-weight: 50;
  }

  .Container-Box {
    position: relative;
    left: 75px;
    width: 75%;
    padding: 15px;
    background: white;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;
    display: flex;
  }
  .content-div {
    align-self: stretch;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;
    display: flex;
  }
  .title-div {
    flex: 1 1 0px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    display: inline-flex;
  }
  .title-typo {
    align-self: stretch;
    color: #112211;
    font-size: 20px;
    font-family: TradeGothic LT Extended;
    font-weight: 700;
  }
  .info-box {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    display: flex;
  }
  .location-div {
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
    display: inline-flex;
  }
  .location-typo {
    opacity: 0.75;
    color: #112211;
    font-size: 12px;
    font-family: Montserrat;
    font-weight: 500;
  }
  .rating-box {
    justify-content: flex-start;
    align-items: flex-start;
    gap: 32px;
    display: flex;
  }
  .star-icon {
    justify-content: flex-start;
    align-items: center;
    gap: 2px;
    display: flex;
  }
  .star-hotel-title {
    color: #112211;
    font-size: 13px;
    font-family: Montserrat;
    font-weight: 500;
  }
  .aminities-div {
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
    display: flex;
  }
  .aminities-span {
    color: #112211;
    font-size: 12px;
    font-family: Montserrat;
    font-weight: 700;
  }
  .aminities-span2 {
    color: #112211;
    font-size: 12px;
    font-family: Montserrat;
    font-weight: 500;
  }
  .rev-Box {
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    display: flex;
  }
  .rating-btn {
    color: #112211;
    font-size: 12px;
    font-family: Montserrat;
    font-weight: 500;
    height: 32px;
    width: 32px;
    border-radius: 4px;
    border: 1px #8dd3bb solid;
    align-items: center;
    display: flex;
  }
  .rating-span {
    color: #112211;
    font-size: 12px;
    font-family: Montserrat;
    font-weight: 700;
  }
  .rating-span2 {
    color: #112211;
    font-size: 12px;
    font-family: Montserrat;
    font-weight: 500;
  }
  .price-box {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    display: flex;
  }
  .price-start-text {
    align-self: stretch;
    opacity: 0.75;
    color: #112211;
    font-size: 12px;
    font-family: Montserrat;
    font-weight: 500;
  }
  .price-span {
    color: #ff8682;
    font-size: 24px;
    font-family: Montserrat;
    font-weight: 700;
  }
  .price-span2 {
    color: #ff8682;
    font-size: 14px;
    font-family: Montserrat;
    font-weight: 700;
  }
  .price-text {
    opacity: 0.75;
    text-align: right;
    color: #112211;
    font-size: 12px;
    font-family: Montserrat;
    font-weight: 500;
  }
  .line {
    align-self: stretch;
    height: 0.5px;
    opacity: 0.25;
    background: #112211;
  }
  .favorite-box {
    width: 435px;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    display: flex;
  }
  .button-div {
    width: 15px;
    height: 40px;
    padding: 8px 16px;
    border-radius: 4px;
    border: 1px #8dd3bb solid;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .place-box {
    flex: 1 1 0px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
  }
  .place-btn {
    color: #112211;
    font-size: 14px;
    font-family: Montserrat;
    font-weight: 600;
    word-wrap: break-word;
    align-self: stretch;
    height: 58px;
    width: 110%;
    background: #8dd3bb;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    display: flex;
  }
`;
export default Wrapper;
