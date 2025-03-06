import { products } from "../../Data/Products";
import Card from "../CardCatalogo/CardCat";
import styles from "./styles.module.scss";

function Catalogo() {
  return (
    <section id="catalogo" className={styles.catalogo}>
      <h1 className={styles.title}>Catálogo</h1>
      <div className={styles.container}>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Catalogo;
