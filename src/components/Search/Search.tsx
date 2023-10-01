import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchStyle = styled.div`
  text-align: center;
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
    background-color: #d9d9d9;
    opacity: 0.5;
    width: 90%;
  }
  ::placeholder{
    color:#fff;
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
`;

const Search = () => {
  return (
    <SearchStyle>
      <h1>Registre o domínio certo para você</h1>
      <input type="text" placeholder="Ex: maravista.com.br" />
      <i>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </i>
    </SearchStyle>
  );
};

export default Search;
