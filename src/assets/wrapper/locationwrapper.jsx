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
    /* margin-right: 35rem; */
    width: auto;
    height: auto;
    display: flex;
    justify-content: space-between;
   
  }
  .amenities ul {
    list-style-type: none;
    padding: 0;
    margin-right: 13rem;
}
  
  
  .icon2 {
    height: 28px;
    width: 20px;
    color: #112211;
    margin-right: 8px; 
  }
  .list {
    margin-left: 1rem;
    font-weight: 400;
  }

  .amenities li {
    display: flex;
    align-items: center;
    margin-bottom: 18px;
    color: #112211;
    font-family: system-ui;
    font-size: 15px;
  }
 
  .amenities-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around; 
  /* align-items: center; */
}

.amenities-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.amenity-item {
  display: flex;
  flex-direction:row;
  /* justify-content: space-around; */
  /* margin-right: 17rem; */
  /* align-items: center; */
}


.amenity-text {
  color: #112211;
  font-family: system-ui;
  font-size: 15px;
  text-align: center;
  margin-top: 4px; /* Adjust as needed */
}


.additional-amenities {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  margin-top: 16px;
}
`;

export default Wrapper;
