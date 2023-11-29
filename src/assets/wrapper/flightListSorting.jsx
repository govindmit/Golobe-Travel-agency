import styled from "styled-components";
const Wrapper = styled.section`
  position: relative;
  right: 16rem;
  width: 135%;
  top: 40px;
  .card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 4.5rem;
  }
  .card-box {
    width: 90%;
    margin-top: 6px;
    height: 80%;
    border-right: 1px solid #ccc;
    /* text-align: unset; */
    padding-left: 20px;

  }
  .card2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    top: 1rem;
  }
  .box {
    width: 32%;
    padding: 0px 0px 1px 21px;
    margin-top: 1rem;
    &.selected {
      border-bottom: 4px solid #8dd3bb;
    }
  }

  .text {
    font-weight: 400;
    color: #112211;
    font-family: "system-ui";
  }
  .text2 {
    font-size: 13px;
    font-weight: 200;
    color: #112211;
    font-family: "system-ui";
  }
`;
export default Wrapper;
