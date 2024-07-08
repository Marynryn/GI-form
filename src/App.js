

import Logo from "./components/Logo/Logo";
import React from "react";
import Form from "./components/Form/Form";
import styled from "styled-components";

const  Container = styled.div`
padding: 30px 20px;
`
function App() {
  return (
    <Container >
      <header >
<Logo/>
      </header>
        <main>
            <Form/>
        </main>
    </Container>
  );
}

export default App;
