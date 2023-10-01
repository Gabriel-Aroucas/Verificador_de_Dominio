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

const Result = (props:any) => {
  return (
    <ResultStyle>
      <div className="status">
        <h3>Status:</h3>
        <span className="statusName">{props.status}</span>
        <p><span>Domínio: </span>{props.dominio}</p>
      </div>
      <div className="suggestion">
        <h3>Sugestão para você</h3>
        <div className="content">
            <p>{props.suggestions1}</p>
            <p>{props.suggestions2}</p>
            <p>{props.suggestions3}</p>
            <p>{props.suggestions4}</p>
        </div>
      </div>
    </ResultStyle>
  );
};
export default Result;
