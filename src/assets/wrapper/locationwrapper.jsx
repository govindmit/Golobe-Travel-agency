import styled from "@emotion/styled";

const Wrapper = styled.section`
  .container {
    height: auto;
    margin-top: 6rem;
    border-top: 2px solid lightgray;
  }
  .box {
    height: auto;
    margin-top: 4rem;
    /* margin-bottom: 4rem;
        border-bottom:  1px solid lightgray; */
  }

  .btn {
    height: 3.2rem;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    display: inline-flex;
    background-color: #8dd3bb;
    color: black;
    text-transform: none;
    font-weight: 400;
  }
  .icon {
    height: 21px;
    width: 15px;
    color: #112211;
  }
  .text {
    color: #112211;
    font-weight: 500;
    font-family: system-ui;
    font-size: 1.3rem;
  }
  .amenities {
    margin-top: 1rem;
    /* height: 17rem; */
    width: auto;
    height: auto;
    display: flex;
    justify-content: space-around;
    /* overflow-y: scroll;
   margin-bottom:10rem; */
  }
  .amenities ul {
    list-style-type: none;
    padding: 0;
  }
  .icon2 {
    height: 28px;
    width: 20px;
    color: #112211;
    margin-right: 8px; /* Adjust the margin between the icon and text */
  }
  .list {
    margin-left: 1rem;
  }

  .amenities li {
    display: flex;
    align-items: center;
    margin-bottom: 18px;
    color: #112211;
    font-family: system-ui;
    font-size: 15px;
  }
  .list {
    margin-left: 1rem;
    font-weight: 400;
  }
`;

export default Wrapper;
