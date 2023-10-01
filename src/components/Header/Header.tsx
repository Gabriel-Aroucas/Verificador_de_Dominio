import { styled } from "styled-components"

const HeaderStyle = styled.header`
display: flex;
justify-content: space-between;
padding: 1rem;
background-color: rgb(234, 234, 234,0.2);
border-radius: 0 0 10px 10px;
position:fixed;
width: 100%;
top:0;

h1{
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 900;
  color:#fff;
}
p{
  font-size:13px;
  color:rgb(255, 255, 255,0.5);
}
.menuIcon{
  font-size:25px;
  color: #fff;
}


`
const Header = () => {
  return (
    <HeaderStyle>
      <div>
        <h1>Domínio Aberto</h1>
        <p>O verificador de domínio mais querido</p>
      </div>
      <span className="menuIcon">☰</span>
    </HeaderStyle>
  )
}

export default Header