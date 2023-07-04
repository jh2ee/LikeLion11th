import styled from "styled-components";

function NotFound(){
    return(
        <Err>
            <h1>Not Found..</h1>
        </Err>
    )
}

export default NotFound;

const Err = styled.div`
    display:flex;
    /*화면 정중앙 정렬*/
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    color: white;
`;