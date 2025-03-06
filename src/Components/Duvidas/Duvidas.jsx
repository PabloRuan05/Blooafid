import styles from "./styles.module.scss";

function Duvidas() {
  return (
    <section id="duvidas" className={styles.duvidas}>
      <h1>Dúvidas</h1>

      <h3>
        Bem-vindo à nossa seção de dúvidas! Aqui você encontrará respostas para
        as dúvidas mais comuns sobre compras na nossa loja pela Kiwify.
      </h3>
      <div className={styles.textd}>
        <section>
          <h2>1. Pagamento</h2>
          <p>
            <strong>Quais formas de pagamento são aceitas?</strong>
            <br /> Aceitamos pagamentos via cartão de crédito, boleto bancário,
            Pix e PayPal. Algumas compras podem ser parceladas no cartão de
            crédito.
          </p>

          <p>
            <strong>Posso parcelar a compra? Há juros?</strong>
            <br />
            Sim, você pode parcelar sua compra no cartão de crédito. Dependendo
            do número de parcelas, pode haver acréscimo de juros.
          </p>

          <p>
            <strong>Meu pagamento foi recusado, o que devo fazer?</strong>
            <br />
            Se seu pagamento foi recusado, tente outro método de pagamento ou
            entre em contato com seu banco para verificar o motivo.
          </p>

          <p>
            <strong>
              Fiz o pagamento, mas ainda não recebi o produto. O que fazer?
            </strong>
            <br />
            Pagamentos via cartão e Pix geralmente são aprovados rapidamente. Já
            boletos podem levar até 3 dias úteis para compensação. Verifique seu
            e-mail (incluindo a caixa de spam) ou entre em contato conosco caso
            não receba o acesso.
          </p>
        </section>

        <section>
          <h2>2. Acesso ao Produto</h2>
          <p>
            <strong>Como faço para acessar meu curso ou e-book?</strong>
            <br />
            Após a confirmação do pagamento, você receberá um e-mail com as
            instruções de acesso. Caso não encontre, verifique sua caixa de
            spam.
          </p>

          <p>
            <strong>Não recebi o e-mail de acesso, e agora?</strong>
            <br />
            Se após algumas horas você ainda não tiver recebido o e-mail, entre
            em contato com nosso suporte informando o e-mail utilizado na
            compra.
          </p>

          <p>
            <strong>Esqueci minha senha, como recupero?</strong>
            <br />
            Na página de login, clique em "Esqueci minha senha" e siga as
            instruções para redefini-la.
          </p>

          <p>
            <strong>Posso acessar o conteúdo de qualquer dispositivo?</strong>
            <br />
            Sim! Você pode acessar seu curso ou e-book de qualquer computador,
            celular ou tablet conectado à internet.
          </p>
        </section>

        <section>
          <h2>3. Reembolso e Garantia</h2>
          <p>
            <strong>Posso solicitar um reembolso?</strong>
            <br />
            Sim, oferecemos reembolso dentro do prazo informado na página do
            produto, conforme nossa política de garantia.
          </p>

          <p>
            <strong>Como solicitar um reembolso?</strong>
            <br />
            Para solicitar um reembolso, entre em contato com nosso suporte
            informando os dados da compra.
          </p>
        </section>

        <section>
          <h2>4. Suporte e Contato</h2>
          <p>
            <strong>Como entro em contato com o suporte?</strong>
            <br />
            Você pode entrar em contato direto com a Kiwify.
          </p>

          <p>
            <strong>Meu acesso está com problemas, o que faço?</strong>
            <br />
            Caso tenha dificuldades para acessar seu produto, tente limpar o
            cache do navegador ou usar um dispositivo diferente. Se o problema
            persistir, entre em contato com nosso suporte.
          </p>

          <p>
            <strong>Meu e-mail de compra está errado, como corrigir?</strong>
            <br />
            Se você digitou um e-mail errado na compra, entre em contato conosco
            informando o e-mail correto para que possamos atualizar seus dados.
          </p>
        </section>

        <section>
          <h2>5. Segurança e Privacidade</h2>
          <p>
            <strong>Minhas informações de pagamento são seguras?</strong>
            <br />
            Sim! A Kiwify utiliza tecnologia de segurança avançada para proteger
            seus dados.
          </p>

          <p>
            <strong>A Kiwify é confiável?</strong>
            <br />
            Sim! A Kiwify é uma plataforma reconhecida e utilizada por milhares
            de vendedores digitais.
          </p>

          <p>
            Se ainda tiver dúvidas, entre em contato conosco! Estamos prontos
            para ajudar. 😊
          </p>
        </section>
      </div>
    </section>
  );
}

export default Duvidas;
