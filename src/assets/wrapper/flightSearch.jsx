import { styled } from "styled-components";

const Wrapper = styled.div`
  margin-top: 70px;
  .search-btn {
    background-color: #8dd3bb;
    padding: 10px;
    border-radius: 4px;
    margin: 20px 16px;
    border-width: 0px;
    height: fit-content;
  }
  #container {
    height: 500px;
    min-width: 310px;
    max-width: 800px;
    margin: 0 auto;
  }

  .loading {
    margin-top: 10em;
    text-align: center;
    color: gray;
  }
`;
export default Wrapper;
