import style from './Card.module.css'

export default function Card({nome, raca, peso, cor}) {
    return(
        <div className={style.card}>
            <h2>{nome}</h2>
            <p>{raca}</p>
            <p>{peso}</p>
            <p>{cor}</p>
        </div>
    );
}