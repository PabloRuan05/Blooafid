import styles from "./styles.module.scss";
import image from "../../Assets/img/pdigital.webp";
function Sobre() {
  return (
    <section id="sobre" className={styles.sobre}>
      <h1>O que é produto digital ?</h1>
      <div className={styles.container}>
        <picture>
          <img src={image} alt="" />
        </picture>
        <div className={styles.text}>
          <p>
            Produto digital é qualquer bem ou serviço que é produzido,
            distribuído e consumido digitalmente, sem a necessidade de um
            formato.
          </p>
          <h2>Exemplos:</h2>
          <ul>
            <li>E-books (livros digitais)</li>
            <li>Cursos online</li>
            <li>Softwares e aplicativos</li>
            <li>Templates e temas para sites</li>
            <li>Músicas e audiolivros</li>
            <li>Fotos, vídeos e gráficos para uso comercial</li>
            <li>Assinaturas de conteúdos exclusivos</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
