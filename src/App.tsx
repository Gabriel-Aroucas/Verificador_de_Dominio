import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Result from "./components/Result/Result";
import About from "./components/About/About";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [status, setstatus] = useState("");
  const [dominio, setdominio] = useState("");
  const [inputvalue, setinputvalue] = useState("");
  const [suggest, setsuggest] = useState("");
  const [suggest2, setsuggest2] = useState("");
  const [suggest3, setsuggest3] = useState("");
  const [suggest4, setsuggest4] = useState("");

  const api = () => {
    const input = document.querySelector("#input") as HTMLInputElement;
    const suggestion = document.querySelector(".suggestion") as HTMLElement;
    const status = document.querySelector(".statusName") as HTMLElement;

    axios
      .get(`https://brasilapi.com.br/api/registrobr/v1/${input.value}`)
      .then((response) => {

        if (response.data.status == "AVAILABLE") {
          setstatus("Disponível");
          setdominio(response.data.fqdn);
          status.style.color = "#64ccc5";
          suggestion.style.display = "none";
        
        } else {
        
          setstatus("REGISTRADO");
          setdominio(response.data.fqdn);
          status.style.color = "#cc6464";
          suggestion.style.display = "block";
          setinputvalue(
            input.value
              .replace(" ", "")
              .replace(".com", "")
              .replace(".net", "")
              .replace(".br", "")
              .replace(".net.br", "")
              .replace(".com.br", "") + "."
          );


          const random = Math.floor(Math.random() * 21);
          setsuggest(response.data.suggestions[random]);
          setsuggest2(response.data.suggestions[random + 2]);
          setsuggest3(response.data.suggestions[random + 3]);
          setsuggest4(response.data.suggestions[random + 4]);
        }
      });
  };

  return (
    <>
      <Header />
      <i onClick={api}>
        <Search />
      </i>
      <Result
        status={status}
        dominio={dominio}
        suggestions1={inputvalue + suggest}
        suggestions2={inputvalue + suggest2}
        suggestions3={inputvalue + suggest3}
        suggestions4={inputvalue + suggest4}
      />
      <About />
      <SocialMedia />
    </>
  );
}

export default App;
