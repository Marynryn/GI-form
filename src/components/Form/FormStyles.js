import styled from "styled-components";


export const Title = styled.h1`
text-align: center;
font-size: 36px;
margin-top: 0`;
export const Box = styled.div`
    display: block;
    width:100%;
    @media (min-width: 768px) {
  display: flex;
 
  gap: 24px;}
`;
export const Subtitle = styled.h2`
  text-align: left;
  margin: 0;
`;
export const Star = styled.span`
  color: red;
`;
export const Label = styled.label`

  display: block;
`;
export const InputField = styled.input`
  box-sizing: border-box;
  font-size: 20px;
  border-radius: 4px;
  padding: 10px;
  border: 1px solid #ccc;
  &:hover,
  :focus {
    outline-color: rgba(0, 128, 0, 0.8);
  }
`;
export const InputContainer = styled.div`
 width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  margin-top: 20px;
`;
export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    
    @media (min-width: 768px) {
    
  width: calc(50% - 12px);
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  margin-top: 20px;}
  
`;
export const Line = styled.div`
  height: 1px;
  width: calc(100% + 60px);
  background-color: #ccc;
  margin: 40px -30px;
`;
export const Button = styled.button`
  border-radius: 4px;
  border: 1px solid green;
  padding: 10px 40px;
  background-color: transparent;
  color: #ccc;
  font-size: 20px;
  margin-left: 20px;
  &:hover {
    color: green;
  }
`;
export const FormBox = styled.div`
  padding: 40px 30px;
    border-radius: 50px;
    background-color: #f1f1f1;
   
    
    @media (min-width: 768px) {
        padding: 40px 80px;
    }
`;
export const ErrorContainer = styled.div`
  height: 10px;
  color: red;
  font-size: 10px;
  margin-top: 4px;
    text-align: right;
`;
