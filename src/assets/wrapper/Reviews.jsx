import styled from "styled-components";

const Wrapper = styled.aside`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;

  .main-div {
    width: 150%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 40px;
    display: inline-flex;
    margin-top: 50px;
  }
  /* .rev-nav {
    width: 1150px;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;
    display: inline-flex;
  } */
  .rev-div {
    flex: 1 1 0;
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    display: inline-flex;
    margin-left: 20px;
  }
  .review {
    align-self: stretch;
    height: 36px;
    color: black;
    font-size: 32px;
    font-family: "Montserrat";
    font-weight: 600;
    word-wrap: break-word;
  }
  .rev-title {
    width: 851px;
    color: black;
    font-size: 16px;
    font-family: "Montserrat";
    font-weight: 400;
    word-wrap: break-word;
  }
  .btn-div {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    display: inline-flex;
    margin-left: 75px;
  }
  .btn-center {
    height: 20px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-radius: 4px;
    border: 1px #8dd3bb solid;
    justify-content: center;
    align-items: center;
    gap: 4px;
    display: inline-flex;
  }
  .btn-text {
    color: #112211;
    font-size: 14px;
    font-family: "Montserrat";
    font-weight: 500;
    word-wrap: break-word;
  }
  /* .card-container-div {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0px;
  } */
  .card-container {
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;
    display: inline-flex;
    margin-left: 75px;
  }
  .card-div {
    width: 418px; //450px;
    height: 520px;
    position: relative;
  }
  .navbar-text.active {
    &:after {
      content: "";
      display: block;
      position: relative;
      top:15px ;
      width: 100%;
      height: 5px;
      background-color: #8dd3bb;
    }
  }
  .cards {
    width: 400px; //425px;
    height: 550px;
    left: 45px;
    top: 22px;
    position: absolute;
    background: rgba(141, 211, 187, 0.4);
    border-radius: 20px;
  }
  .card-content {
    padding: 24px;
    left: -1px;
    top: 0;
    position: absolute;
    background: white;
    box-shadow: 2px 4px 16px rgba(17, 34, 17, 0.1);
    border-radius: 20px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 40px;
    display: inline-flex;
  }
  .cards-blog {
    height: 260px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    display: flex;
  }
  .card-title-div {
    align-self: stretch;
    height: 150px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    display: flex;
  }
  .card-title {
    align-self: stretch;
    height: 89px;
    color: #112211;
    font-size: 24px;
    font-family: TradeGothic LT Extended;
    font-weight: 700;
    word-wrap: break-word;
  }
  .card-description-div {
    align-self: stretch;
    height: 73px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    display: flex;
  }
  .card-desc {
    align-self: stretch;
    height: 37px;
    opacity: 0.5;
    color: #112211;
    font-size: 14px;
    font-family: "Montserrat";
    font-weight: 500;
    word-wrap: break-word;
  }
  .more-btn {
    align-self: stretch;
    text-align: right;
    color: #112211;
    font-size: 14px;
    /* font-family: TradeGothic LT Extended; */
    font-weight: 700;
    word-wrap: break-word;
    cursor: pointer;
  }
  .section-div {
    align-self: stretch;
    height: 117px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    display: flex;
  }
  .rev-name-div {
    align-self: stretch;
    height: 73px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    display: flex;
  }
  .rev-name {
    align-self: stretch;
    height: 37px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
    display: flex;
  }
  .name-review {
    align-self: stretch;
    color: #112211;
    font-size: 14px;
    font-family: TradeGothic LT Extended;
    font-weight: 700;
    word-wrap: break-word;
  }
  .city-rev {
    align-self: stretch;
    opacity: 0.5;
    color: #112211;
    font-size: 12px;
    font-family: "Montserrat";
    font-weight: 500;
    word-wrap: break-word;
  }
  .rev-image {
    align-self: stretch;
    height: 200px;
    border-radius: 8px;
  }
  .stars {
    align-self: stretch;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    display: inline-flex;
  }
  .star-icon {
    width: 22.5px;
    height: 21px;
    left: 0.75px;
    top: 1.5px;
    color: #ffc107;
  }
  .text {
    flex: 1 1 0;
    opacity: 0.4;
    color: #112211;
    font-size: 12px;
    font-family: "TradeGothic LT Extended";
    font-weight: 700;
    word-wrap: break-word;
  }
  .social {
    align-self: stretch;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    display: inline-flex;
  }
  .social-icon {
    width: 20px;
    height: 15px;
    position: relative;
  }
  .icon-image {
    width: 30px;
    left: -6px;
    bottom: -7px;
    position: absolute;
  }
`;

export default Wrapper;
