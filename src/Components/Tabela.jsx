import React, { useState, useEffect } from "react";
import Styles from '../Styles/Tabela.module.css'
function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://b5574f17-8c93-4c4c-a372-476de94e1845-00-1vio8ueb0bv8m.janeway.replit.dev/"
        );
        if (!response.ok) {
          throw new Error("Falha ao carregar os dados");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <div id="tabela" className={Styles.container}>
      {data ? (
        <div className={Styles.box}>
          <h2 className={Styles.title}>Previsão de pontos - Brasileirão 2024</h2>
          <table className={Styles.table}>
            <thead>
              <tr className={Styles.titulosTabela}>
                <th>Logo</th>
                <th>Time</th>
                <th>Pontos</th>
              </tr>
            </thead>
            <tbody className={Styles.container_tbody}>
              {data.map((item, index) => {
                let rowClass = '';
                if (index === 0) {
                  rowClass = Styles.verde;
                } else if (index >= data.length - 4) {
                  rowClass = Styles.vermelho;
                }
  
                return (
                  <tr key={index} className={rowClass}>
                    <td>
                      <img 
                        src={`/images/${item.Time.toLowerCase()}.png`}
                        alt={item.Time}
                        style={{ width: '30px', height: 'auto' }}
                      />
                    </td>
                    <td>{item.Time}</td>
                    <td>{item.Pontos.toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default App;
