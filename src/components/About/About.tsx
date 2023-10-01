import { styled } from "styled-components";
import registrobr from "../../assets/registrobr.png";

const AboutStyle = styled.section`
  margin-top: 50px;
  color: #fff;
  padding: 1rem;
  h2 {
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 900;
  }
  p {
    font-size: 13px;
    margin-top: 8px;
  }
  strong {
    color: #64ccc5;
  }
  .src{
    text-align:center;
    padding:1rem
  }

  @media only screen and (min-width: 550px){
    width: 50%;
    text-align: center;
    margin: 0 auto;
  }
`;

const About = () => {
  return (
    <AboutStyle>
      <h2>Quem somos ?</h2>
      <p>
        Nós da <strong>DOMÍNIO ABERTO</strong> somo uma empresa fictícia, criada
        para fins de estudo, não somos uma empresa real e os resultados de suas
        pesquisas são buscados pela API do Registro.br
      </p>
      <div className="src">
        <img
          src={registrobr}
          alt="logotipo da empresa Registro.br"
          title="logotipo da empresa Registro.br"
        />
      </div>
    </AboutStyle>
  );
};

export default About;
