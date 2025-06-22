import "./styles/newproduct-page.css";

export default function Register_Product() {
  return (
    <main>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <article className="essential">
        <section className="image-block">
          <div className="container-image">
            <img
              id="logo-product"
              src="imagens/o-email.png"
              alt="imagem-produto"
            />
          </div>
        </section>

        <section className="interface-add">
          <h4>NOVO PRODUTO</h4>
          <form action="" method="get" autoComplete="on">
            <label htmlFor="iname">Nome</label>
            <input
              className="special-input"
              type="text"
              name="Nome"
              id="iname"
              autoComplete="name"
            />
            <label htmlFor="ipreco">Preço</label>
            <input
              className="special-input"
              type="number"
              name="Preço"
              id="ipreco"
            />
            <label>Tamanho</label>

            <div className="radio-container">
              <input type="radio" name="tamanho" id="ip" />
              <label className="radio-item" htmlFor="ip">
                P
              </label>
              <input type="radio" name="tamanho" id="im" />
              <label className="radio-item" htmlFor="im">
                M
              </label>
              <input type="radio" name="tamanho" id="ig" />
              <label className="radio-item" htmlFor="ig">
                G
              </label>
              <input type="radio" name="tamanho" id="igg" />
              <label className="radio-item" htmlFor="igg">
                GG
              </label>
            </div>

            <label htmlFor="idesc">Descrição</label>
            <textarea name="device-width" id="idesc"></textarea>

            <div className="buttons">
              <button type="button" className="fakebutton">
                CANCELAR
              </button>

              <input id="submit-button" type="submit" value="CONFIRMAR" />
            </div>
          </form>
        </section>
      </article>
    </main>
  );
}
