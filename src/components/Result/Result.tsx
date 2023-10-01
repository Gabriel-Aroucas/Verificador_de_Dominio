import { styled } from "styled-components";

const ResultStyle = styled.section`
  background-color: rgb(234, 234, 234, 0.2);
  width: 90%;
  margin: 20px auto;
  text-align: center;
  padding:1rem;
  h3,
  p {
    color: #fff;
    font-size: 15px;
  }
  span {
    color: #cc6464;
    text-transform: uppercase;
    font-weight: 900;
  }
  span:nth-child(1) {
    color: #64ccc5;
    text-transform: capitalize;
  }
  p {
    color: #fff;
    font-weight: 900;
    font-size: 13px;
  }

  .suggestion {
    margin-top: 20px;
  }
  .content{
    margin:5px 0;
    p{
        color:#64ccc5;
        text-decoration:underline;
    }
  }
`;

const Result = () => {
  return (
    <ResultStyle>
      <div className="status">
        <h3>Status:</h3>
        <span>Registrado</span>
        <p>
          <span>Domínio:</span> brasilapi.com.br
        </p>
      </div>
      <div className="suggestion">
        <h3>Sugestão para você</h3>
        <div className="content">
            <p>brasilapi.agr.br</p>
            <p>brasilapi.app.br</p>
            <p>brasilapi.art.br</p>
            <p>brasilapi.eco.br</p>
            <p>brasilapi.esp.br</p>
        </div>
      </div>
    </ResultStyle>
  );
};
export default Result;
