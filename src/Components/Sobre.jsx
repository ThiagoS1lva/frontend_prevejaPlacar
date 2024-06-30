import Styles from '../Styles/Sobre.module.css'

export default function Sobre() {

    return (
        <div className={Styles.container}>
            <div className={Styles.img}>
                <img src="/images/taça.jpg" alt="Soccer" />
            </div>
            <div className={Styles.text}>
                <h2>PreVejaPlacar</h2>
                <p> <span>"PreVejaPlacar"</span> é um site dedicado à previsão dos resultados dos jogos do Brasileirão 2024, utilizando análise de dados com Python. O objetivo principal é oferecer previsões baseadas em algoritmos que analisam informações dos times participantes. Essas análises são atualizadas diariamente para fornecer previsões atualizadas dos jogos do campeonato, permitindo aos usuários uma visão informada e estratégica para acompanhar o desempenho dos times ao longo da temporada.</p>
            </div>
        </div>
    )
}