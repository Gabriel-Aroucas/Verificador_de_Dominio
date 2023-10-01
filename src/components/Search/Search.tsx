import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchStyle = styled.div`
  text-align: center;
  margin-top: 80px;
  h1 {
    font-size: 25px;
    text-align: center;
    margin-top: 3rem;
    color: #eeeeee;
    font-weight: 900;
    text-transform: uppercase;
    padding: 1rem;
  }
  input {
    padding: 1rem 2rem;
    background-color: rgb(217, 217, 217,0.2);
    border:none;
    width: 90%;
    color:#d9d9d9;
  }
  input:focus{
    outline:none;
  }
  ::placeholder{
    color:#fff;
    opacity: 0.4;
  }
  i {
    position: absolute;
    left: 87%;
    margin-top: 15px;
    color: #d9d9d9;
  }
  i:hover{
    color:#868181;
    cursor:pointer;
  }

  @media only screen and (min-width:550px){
    input{
      width:30%
    }
    i{
      left:62%
    }
    
  }
`;

const Search = () => {
  return (
    <SearchStyle>
      <h1>Registre o domínio certo para você</h1>
      <input type="text" placeholder="Ex: maravista.com.br ou Maravista" id="input"/>
      <i><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
    </SearchStyle>
  );
};

export default Search;
