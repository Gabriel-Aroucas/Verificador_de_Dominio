import styled from 'styled-components'

const LoaderStyle = styled.section`
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(0,0,0,0.5);
    span{
        position: absolute;
        width: 30px;
        height: 30px;
        border: 3px solid white;
        border-top: 3px solid gray;
        border-radius: 50%;
        animation: loop 1s infinite linear;
    }
    @keyframes loop {
        from {transform:rotate(0deg)}
        to {transform:rotate(360deg)}

    }
`

const Loader = () => {
  return (
    <LoaderStyle>
        <span/>
    </LoaderStyle>
  )
}

export default Loader