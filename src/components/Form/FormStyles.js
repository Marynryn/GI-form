import styled from 'styled-components';

 export const Box = styled.div`
display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  grid-gap: 24px;
`;
export const Subtitle = styled.h2`
text-align: left;
 margin: 0;
`;
export const Star = styled.span`
color: red;
`;
export const Label = styled.label`
 margin-top: 10px;
display: block;`
export const InputField = styled.input`
 box-sizing: border-box;
 font-size: 20px;
 border-radius: 4px;
 padding: 10px;
 border: 1px solid #ccc;
`;
export const InputContainer = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 margin-bottom: 40px;
margin-top: 20px;
`;
export const InputBox = styled.div`
 width: calc(50% - 12px);
 display: flex;
 flex-direction: column;
 margin-bottom: 40px;
 margin-top: 20px;
 gap:20px;
`;
export const Line = styled.div`
height: 1px;
width: 100%;
background-color: #ccc;
margin: 40px 0;
`;
export const Button = styled.button`
 border: 1px solid rgba(0, 128, 0, 0.8);
`;
export const Form = styled.form`
padding: 30px;
`;
