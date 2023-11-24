import styled from "styled-components";

const Wrapper = styled.div`
margin-top: 40px;
  .box-div {
    padding: 15px;
    bottom: 0px;
    width: 550px;
    height: 390px;
    background: #8dd3bb;
    border-radius: 20px;
    gap: 120px;
    position: relative;
    left: -2rem;
    top: 1rem;
  }

  .box-container {
    padding: 10px;
  }
  .box-title {
    text-align: left;
    color: black;
    font-size: 40px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-weight: 500;
    word-wrap: break-word;
    margin-bottom: 10px;
  }
  .box-desc {
    color: black;
    font-size: 14px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-weight: 400;
    word-wrap: break-word;
  }
  .box-btn {
    background: white;
    left: 6px;
    bottom: -125px;
    padding: 8px 16px 8px 16px;
    height: 55px;
    border-radius: 4px;
    color: black;
    font-size: 18px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-weight: 400;
    text-transform: none;
    width: 33rem;
    border: none;
  }
  .box-text {
    background: white;
    padding: 7px 39px 20px 20px;
    height: 35px;
    border-radius: 4px;
    color: #112211;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-weight: 500;
    position: absolute;
    right: 3rem;
    width: 1rem;
    border: none;
    top: 2.7rem;
  }

  /* .box-btn:hover {
    background: #8dd3bb;
    border: 1px solid black;
  }
  .icon {
    height: 25px;
    margin-right: 5px;
  }  */
`;
export default Wrapper;
