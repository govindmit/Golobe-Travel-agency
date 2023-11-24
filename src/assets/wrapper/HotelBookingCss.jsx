import styled from "styled-components";

const Wrapper = styled.div`
  .paper-container {
    width: 85%;
    height: 130px;
    background: white;
    box-shadow: 0px 4px 16px rgba(17, 34, 17, 0.05);
    border-radius: 16px;
    display: flex;
    justify-content: center;
  }
  .search-btn {
    height: 52px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    background-color: #8dd3bb;
    position: relative;
    top: 40px;
    right: 12px;
  }
  .input-text {
    margin-left: 15px;
    width: 365px;
    height: 56px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`;
export default Wrapper;
