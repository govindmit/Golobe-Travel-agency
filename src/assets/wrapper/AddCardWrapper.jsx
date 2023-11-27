import styled from 'styled-components';

const Wrapper = styled.section`
.card{
    width: 784px;
    height: 316px;
    border-radius: 12px;
}
.box-btn {
    background: #8dd3bb;
    width: 758px;
    padding: 16px;
    height: 80px;
    border-radius: 12px;
    color: black;
    font-size: 15px;
    font-family: system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
    font-weight: 400;
    text-transform: none;
    margin-left: 12px;
    margin-top: 1rem;
    border: none;
    display:flex;
    justify-content: space-between;
    /* align-items: center; */
  }
  .box{
    width:745px;
    height: 188px;
    border:2px dashed #8dd3bb;
    margin-left: 12px;
    margin-top: 1rem;
    border-radius: 12px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
   .icon{
    color: #8dd3bb;
    height:25px;
    width:25px;
  } 
  .text3 {
      font-size: 0.9rem;
      font-weight: 400;
      color: #112211;
      font-family: "system-ui";
      margin-left: 1rem;
      text-transform: capitalize;
    }



`
export default Wrapper;

