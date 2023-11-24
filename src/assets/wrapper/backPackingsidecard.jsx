import styled from 'styled-components';

const Wrapper = styled.section`
    display:flex;
    flex-direction: row;
    /* border:2px solid black; */
   width: 42%;
    /* margin-left: 40px; */
    margin-top: 10px;
    height:25rem;

.box-div {
 padding: 50px;
    bottom: 0px;
    width: 550px;
    height: 400px;
     background:#8DD3BB; 
     border-radius: 20px;
     gap:120px;
     /* position: relative; */
    left: -6rem;
    top:10px
}
.center-div
{
    height: 25rem;
    /* border: 2px solid black; */
    display: flex;
    justify-content: space-evenly;

}
    
.box-container {
    padding: 0px;
  }
  .first-div{
    width:300px;
    height:150px;
  }
  .second-div{
    width:200px;
    height:150px;
    margin-left: 1rem;
    
  }.img{
    height: 12.2rem;
    padding: 4px 20px 24px 4px;
    width: 18rem
    
    

  }

`
export default Wrapper