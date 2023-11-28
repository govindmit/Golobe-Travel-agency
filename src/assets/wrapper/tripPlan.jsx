import styled from "styled-components";

const Wrapper = styled.div`
  
  .card {
    padding: 20px;
    box-shadow: 0px 4px 16px rgba(17, 34, 17, 0.08);
    border-radius: 16px;
  }
  .img {
    width: 90px;
    height: 90px;
    border-radius: 8px;
  }
  .trip-text-div {
    margin: 20px;
  }
  .trip-data-text {
    align-self: stretch;
    opacity: 0.7;
    color: #112211;
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 600;
    word-wrap: break-word;
  }
  .trip-text-content {
    color: #112211;
    gap: 8px;
    font-size: 14px;
    font-family: Montserrat;
    font-weight: 500;
    word-wrap: break-word;
  }
`;

export default Wrapper;
