import styles from "./styles.module.scss";
import product from "../../Data/Products";

function Card({ product }) {
  return (
    <a href={product.rota || "#"}>
      <div className={styles.card}>
        <img src={product.image} alt="" />
        <div className={styles.text}>
          <h1>{product.titulo}</h1>
          <h2>por {product.autor}</h2>
          <p>{product.descricao}</p>
          <h3>
            A partir de <span>{product.preco}</span> !
          </h3>
        </div>
      </div>
    </a>
  );
}

export default Card;
