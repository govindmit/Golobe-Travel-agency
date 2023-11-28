import styled from 'styled-components';

const Wrapper = styled.section`
  .amenities-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.amenities-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
}

.amenity-item {
  display: flex;
  flex-direction:row;
  align-items: center;
}

.icon2 {
  height: 28px;
  width: 20px;
  color: #112211;
  margin-bottom: 8px;
}

.amenity-text {
  color: #112211;
  font-family: system-ui;
  font-size: 15px;
  text-align: center;
  margin-top: 4px; /* Adjust as needed */
}

.show-more {
  color: #FF8682;
  font-weight: bold;
  cursor: pointer;
  margin-top: 16px;
}

.additional-amenities {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  margin-top: 16px;
}


`
export default Wrapper;
    