import { styled } from "styled-components";

const Wrapper = styled.div`
  .paper {
    width: 90%;
    border-radius: 32px;
  }
  .image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .box-div {
    position: relative;
    height: 102%;
    min-width: fit-content;
  }

  .content-container {
    display: flex;
    margin-inline: 5px;
    gap: 20px;
  }
  .box-container {
    position: absolute;
    bottom: 0;
    color: white;
    padding: 11px;
  }

  .box-title {
    margin-bottom: 10px;
  }
  .charges-box {
    margin-top: 20px;
    margin-left: 24px;
  }
  .box-desc {
    margin-bottom: 4px;
  }

  .box-btn {
    padding: 12px 20px;
    min-width: 220px;
    margin: 8px 4px;
    border: 1px solid white;
    color: black;
    background-color: #8dd3bb;
  }
`;

export default Wrapper;
