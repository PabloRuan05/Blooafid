import style from "./styles.module.scss";

function Banner() {
  return (
    <section id={style.banner}>
      <h1>
        Em busca dos melhores <span>produtos digitais</span> ?
      </h1>
      <h2>
        Então está no lugar <span>certo</span> !
      </h2>
    </section>
  );
}

export default Banner;
