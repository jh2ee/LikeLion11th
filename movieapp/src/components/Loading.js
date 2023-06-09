import styled from "styled-components";

function Loading(){
    return(
        <Loader>
            <h1>Loading...</h1>
        </Loader>
    )
}

export default Loading;

const Loader = styled.div`
    display:flex;
    /*화면 정중앙 정렬*/
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    color: white;
`;