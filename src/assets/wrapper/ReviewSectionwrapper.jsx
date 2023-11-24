import styled from "styled-components";

const Wrapper = styled.section`
  .container {
    height: auto;
    margin-top: 2rem;
    /* border-top: 2px solid lightgray; */
    /* margin-bottom: 4rem; */
    border-bottom: 1px solid lightgray;
  }
  .box {
    height: auto;
    margin-top: 4rem;
    /* margin-bottom: 4rem; */
    /* border-bottom:  1px solid lightgray;  */
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
  .text {
    color: #112211;
    font-weight: 500;
    font-family: system-ui;
    font-size: 1.3rem;
  }
  .box2 {
    display: flex;
  }
  .text1 {
    font-weight: 500;
    color: #112211;
    font-family: "system-ui";
    margin-left: 1rem;
    margin-top: 1rem;
  }
  .text2 {
    font-size: 13px;
    font-weight: 300;
    color: #112211;
    font-family: "system-ui";
    margin-left: 1rem;
    margin-top: 0.5rem;
    text-transform: capitalize;
  }

  .review {
   
    width: 102%;
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
    margin-bottom: 1rem;
    align-items: center;
    /* display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderBottom: "1px solid lightgrey",
        marginBottom: "1rem", */
  }

  .info-container {
    display: flex;
    flex-direction: column;
    /* margin-bottom: -32px; */
  }

  .info-line {
    display: flex;
    align-items: center;
    margin-top: -16px;
  }

  .person-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover;
  }

    .icon {
    height: 10px;
    color: #112211; 
     position: relative;
    /* left:55rem; */
   }
  */

  .review span {
    margin: 0 3px;
  }

  .rating {
    font-size: 14px;
    font-weight: 400;
    color: #112211;
    font-family: "system-ui";
    margin-right: 5px;
  }

  .name {
    font-size: 14px;
    font-weight: 300;
    color: #112211;
    font-family: "system-ui";
    margin-left: 5px; 
    text-transform: capitalize;
  }
  .text3 {
    font-size: 13px;
    font-weight: 300;
    color: #112211;
    font-family: "system-ui";
     text-transform: capitalize;
    margin-top: -18px;
   
  }
`;

export default Wrapper;
