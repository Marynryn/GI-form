import Logo from "./components/Logo/Logo";
import React from "react";
import Form from "./components/Form/Form";
import styled from "styled-components";
import { Toaster } from "react-hot-toast";
const Container = styled.div`
    padding: 30px 16px;  
 
    @media (min-width: 480px){
        width: 400px;
        margin: 0 auto;
        padding: 30px 40px;
    }
    @media (min-width: 768px){
        width: 688px;
    }
    @media (min-width: 1140px) {
        width: 1000px;
       
    }
`;
function App() {
  return (
    <Container>
      <header>
        <Logo />
      </header>
      <main>
        <Form />
      </main>
      <Toaster position="top-right" reverseOrder={false} />
    </Container>
  );
}

export default App;
