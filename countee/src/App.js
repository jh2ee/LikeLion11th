import './App.css';
import { useState } from "react";
import styled from "styled-components";

function App() {
  const [count, setCount] = useState(0);
  const Plus = (event) =>{
    setCount(count + 1);
  }
  const Minus = (event) =>{
    if(count === 0){
      return;
    }
    else{
      setCount(count - 1);
    }
  }
  return (
    <Container>
        <h1>{count}</h1>
      <Wrapper className='root'>
        <StyledBtn onClick={Plus}>+</StyledBtn>
        <StyledBtn onClick={Minus}>-</StyledBtn>
      </Wrapper>
    </Container>
  );
}

export default App;

const Container = styled.div`
  text-align: center;
`

const Wrapper = styled.div`
`

const StyledBtn = styled.button`
  width: 50px;
  height: 30px;
  margin: 5px;
  border-radius: 10px;
`;