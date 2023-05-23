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
  const Reset = (event) =>{
    setCount(0);
  }
  return (
    <Container>
      <Wrapper className='root'>
        <h1>{count}</h1>
        <StyledBtn onClick={Plus}>+</StyledBtn>
        <StyledBtn onClick={Minus}>-</StyledBtn>
        <br></br>
        <StyledBtn onClick={Reset}>Reset</StyledBtn>
      </Wrapper>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  text-align: center;
  width: 200px;
  border-radius: 10px;
  border: 1px solid #212121;
`

const StyledBtn = styled.button`
  width: 50px;
  height: 30px;
  margin: 5px;
  border-radius: 10px;
`;