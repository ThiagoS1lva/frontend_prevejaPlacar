import React, { useState } from "react";
import TimeSelect from "../Components/SelecionarTime";
import axios from "axios";
import Styles from '../Styles/Heatmap.module.css'

const App = () => {
  const [timeCasa, setTimeCasa] = useState("Athletico Paranaense");
  const [timeFora, setTimeFora] = useState("Athletico Paranaense");
  const [heatmapUrl, setHeatmapUrl] = useState("");

  const options = [
    "Athletico Paranaense",
    "Atlético Goianiense",
    "Atlético Mineiro",
    "Bahia",
    "Botafogo",
    "Corinthians",
    "Criciúma",
    "Cruzeiro",
    "Cuiabá",
    "Flamengo",
    "Fluminense",
    "Fortaleza",
    "Grêmio",
    "Internacional",
    "Juventude",
    "Palmeiras",
    "Red Bull Bragantino",
    "São Paulo",
    "Vasco da Gama",
    "Vitória",
  ];

  const handleTimeCasaChange = (value) => {
    setTimeCasa(value);
  };

  const handleTimeForaChange = (value) => {
    setTimeFora(value);
  };

  const gerarHeatmap = () => {
    if (timeCasa && timeFora) {
      axios.post(
          "https://b5574f17-8c93-4c4c-a372-476de94e1845-00-1vio8ueb0bv8m.janeway.replit.dev/heatmap",
          {
            time_casa: timeCasa,
            time_fora: timeFora,
          },
          { responseType: "arraybuffer" }
        )
        .then((response) => {

          const blob = new Blob([response.data], { type: "image/png" });
          const imageUrl = URL.createObjectURL(blob);
          setHeatmapUrl(imageUrl);
        })
        .catch((error) => {
          console.error("Erro ao chamar a API:", error);
        });
    } else {
      alert("Por favor, selecione os times da casa e visitante.");
    }
  };

  return (
    <div className={Styles.container}>
        <h1>Gerador de Heatmap</h1>
      <div className={Styles.select}>
        <TimeSelect
          label="Escolha o time da casa"
          options={options}
          onChange={handleTimeCasaChange}
        />
        <TimeSelect
          label="Escolha o time visitante"
          options={options}
          onChange={handleTimeForaChange}
        />
        <button onClick={gerarHeatmap}>Gerar Heatmap</button>
      </div>
      <div className={Styles.img}>
      {heatmapUrl && <img src={heatmapUrl} alt="Heatmap" />}
      </div>
    </div>
  );
};

export default App;
