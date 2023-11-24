import styled from "styled-components";

const Wrapper = styled.section`
  .top-nav-box {
    display: flex;
    position: relative;
    top: 5rem;
  }
  .city-title {
    color: #ff8682;
    font-size: 14px;
    font-family: Montserrat;
    font-weight: 500;
  }
  .icon-arrow-div {
    left: 5px;
    position: relative;
  }
  .icon-arrow {
    height: 14px;
  }
  .country-title {
    color: #ff8682;
    font-size: 14px;
    font-family: "Montserrat";
    font-weight: 500;
    margin-left: 10px;
  }
  .hotel-name {
    margin-left: 10px;
    opacity: 0.75;
    color: #112211;
    font-size: 14px;
    font-family: "Montserrat";
    font-weight: 500;
  }

  .hotel-info-div {
    position: relative;
    top: 8rem;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
    display: flex;
  }
  .info-container {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
    display: flex;
  }
  .name-div {
    align-items: center;
    gap: 16px;
    display: inline-flex;
  }
  .ht-text {
    color: #112211;
    font-size: 24px;
    font-family: TradeGothic LT Extended;
    font-weight: 700;
  }
  .ht-star {
    width: 2px;
    height: 20px;
    color: #ff8682;
  }
  .loc-box {
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2px;
    display: inline-flex;
  }
  .loc-text {
    opacity: 0.75;
    color: #112211;
    font-size: 14px;
    font-family: "Montserrat";
    font-weight: 500;
  }
  .price-box {
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    display: flex;
  }
  .loc-btn {
    width: 10px;
    align-self: stretch;
    height: 15px;
    padding: 8px 16px;
    border-radius: 4px;
    border: 1px #8dd3bb solid;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .rating-btn {
    color: #112211;
    font-size: 12px;
    font-family: "Montserrat";
    font-weight: 500;
  }
  .span-div {
    color: #112211;
    font-size: 12px;
    font-family: "Montserrat";
    font-weight: 700;
  }
  .price-box-div {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 16px;
    display: flex;
  }
  .pr-span {
    color: #ff8682;
    font-family: "Montserrat";
    font-weight: 700;
  }
  .content-div {
    justify-content: flex-start;
    align-items: flex-start;
    gap: 15px;
    display: flex;
  }
  .content-box {
    display: flex;
    width: 10px;
    height: 30px;
    padding: 8px 16px;
    border-radius: 4px;
    border: 1px #8dd3bb solid;
    justify-content: center;
  }
  .book-box {
    align-self: stretch;
    background: #8dd3bb;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 125px;
    flex-direction: column;
  }
  .book-text {
    color: #112211;
    font-size: 14px;
    font-family: "Montserrat";
    font-weight: 600;
  }

  .img-container {
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: inline-flex;
    position: relative;
    top: 10rem;
  }
  .first-img {
    flex: 1 1 0;
    align-self: stretch;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    height: 550px;
    width: 550px;
  }
  .img-box {
    flex: 1 1 0;
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: inline-flex;
  }
  .top-img-div {
    align-self: stretch;
    flex: 1 1 0;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: inline-flex;
  }
  .top-first-img {
    flex: 1 1 0;
    align-self: stretch;
    width: 271px;
    height: 270px;
  }

  .top-second-img {
    flex: 1 1 0;
    align-self: stretch;

    width: 271px;
    height: 270px;
  }
  .bottom-img-box {
    align-self: stretch;
    flex: 1 1 0;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: flex;
  }
  .button-box {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    display: flex;
  }
  .text-div {
    align-self: stretch;
    height: 24px;
    padding: 8px 16px;
    background: #8dd3bb;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    display: flex;
    cursor: pointer;
    position: absolute;
    bottom: 25px;
    right: 15px;
  }
  .text {
    color: #112211;
    font-size: 14px;
    font-family: "Montserrat";
    font-weight: 600;
  }

  /* Overview Css */
  .overview-box {
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 32px;
    display: flex;
    position: relative;
    top: 4rem;
  }
  .over-div {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    display: flex;
  }
  .over-text {
    color: #112211;
    font-size: 20px;
    font-family: "TradeGothic LT Extended";
    font-weight: 700;
  }
  .over-body {
    width: 1150px;
    opacity: 0.75;
    color: #112211;
    font-size: 16px;
    font-family: "Montserrat";
    font-weight: 500;
  }
  .over-container {
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    display: flex;
    position: relative;
    top: 2rem;
  }
  .over-grid {
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    padding-right: 64px;
    border-radius: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
    height: 145px;
    border: 1px #8dd3bb solid;
  }
  .show-grid {
    gap: 20px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    display: flex;
  }
  .rev-point {
    color: #112211;
    font-size: 32px;
    font-family: "TradeGothic LT Extended";
    font-weight: 700;
  }
  .rev-div {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
  }
  .rev-text {
    color: #112211;
    font-size: 16px;
    font-family: "Montserrat";
    font-weight: 700;
  }
  .rev-text-count {
    color: #112211;
    font-size: 14px;
    font-family: "Montserrat";
    font-weight: 500;
  }
  .stars-icon-div {
    width: 32px;
    height: 32px;
    position: relative;
  }
  .overview-text {
    color: #112211;
    font-size: 16px;
    font-family: "Montserrat";
    font-weight: 500;
  }

  /* HotelList Css */
  .ht-li-box {
    flex-direction: column;
    gap: 32px;
    display: inline-flex;
    position: relative;
    top: 4rem;
  }
  .ht-li-title {
    color: #112211;
    font-size: 20px;
    font-family: "TradeGothic LT Extended";
    font-weight: 700;
  }
  .ht-li-container {
    position: relative;
    right: 41px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    display: flex;
  }
  .hi-li-ul {
    width: 1125px;
    justify-content: space-between;
    align-items: center;
  }
  .hi-list {
    list-style: none;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    display: flex;
    width: 100%;
    margin-bottom: 20px;
  }
  .ht-li-img {
    width: 48px;
    height: 48px;
    background: linear-gradient(0deg, #d9d9d9 0%, #d9d9d9 100%);
    border-radius: 4px;
  }
  .ht-li-name {
    color: #112211;
    font-size: 16px;
    font-family: "Montserrat";
    font-weight: 500;
  }
  .ht-li-pr-box {
    margin-left: auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 64px;
    display: flex;
  }
  .ht-li-pr-span {
    color: #112211;
    font-size: 24px;
    font-family: Montserrat;
    font-weight: 600;
  }
  .ht-li-pr-btn-div {
    width: 150px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 10px;
    display: inline-flex;
  }
  .ht-li-btn {
    align-self: stretch;
    height: 44px;
    background: #8dd3bb;
    border-radius: 4px;
    color: #112211;
    font-size: 14px;
    font-family: "Montserrat";
    font-weight: 600;
  }
`;

export default Wrapper;
