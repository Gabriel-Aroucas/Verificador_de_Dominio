import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Result from "./components/Result/Result";
import About from "./components/About/About";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import Loader from "./components/Loader/Loader";

function App() {
  const [status, setstatus] = useState("");
  const [dominio, setdominio] = useState("");
  const [inputvalue, setinputvalue] = useState("");
  const [suggest, setsuggest] = useState("");
  const [suggest2, setsuggest2] = useState("");
  const [suggest3, setsuggest3] = useState("");
  const [suggest4, setsuggest4] = useState("");
  const [remove_loader, set_remove_loader] = useState(true)

  const api = () => {
    set_remove_loader(false)
    const input = document.querySelector("#input") as HTMLInputElement;
    const suggestion = document.querySelector(".suggestion") as HTMLElement;
    const status = document.querySelector(".statusName") as HTMLElement;
    const resultstyle = document.querySelector(".resultstyle") as HTMLElement;

    axios
      .get(`https://brasilapi.com.br/api/registrobr/v1/${input.value}`)
      .then((response) => {
        
        console.log(response)
        const data = {
          status : response.data.status,
          dominio: response.data.fqdn,
          suggestions: response.data.suggestions,
        }

        resultstyle.style.display='block';
        setTimeout(() => {
        resultstyle.style.opacity='1';
        }, 300);


        if (data.status == "AVAILABLE") {
          setstatus("Disponível");
          setdominio(data.dominio);
          status.style.color = "#64ccc5";
          suggestion.style.display = "none";
        
        } else {
        
          setstatus("REGISTRADO");
          setdominio(data.dominio);
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
          setsuggest(data.suggestions[random]);
          setsuggest2(data.suggestions[random + 2]);
          setsuggest3(data.suggestions[random + 3]);
          setsuggest4(data.suggestions[random + 4]);
        }
        set_remove_loader(true)
      })
      .catch(()=>{
        set_remove_loader(true)
      })
  };

  return (
    <>
      <Header />
      <span onClick={api}>
        <Search />
      </span>
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
      {!remove_loader && <Loader/>}
    </>
  );
}

export default App;
