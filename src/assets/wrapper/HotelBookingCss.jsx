import styled from "styled-components";

const Wrapper = styled.div`
  .paper-container {
    width: 91%;
    height: 100px;
    background: white;
    box-shadow: 0px 4px 16px rgba(17, 34, 17, 0.05);
    border-radius: 16px;
    display: flex;
    justify-content: center;
  }
  .input-text {
    margin-left: 15px;
    width: 365px;
    height: 56px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  .search-btn {
    height: auto;
    background-color: #8dd3bb;
    padding: 13px;
    border-radius: 4px;
    margin: 8px 4px;
    border-width: 0px;
  }
`;
export default Wrapper;
