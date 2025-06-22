import "../style/newproduct-page.css";

export default function New_Product() {
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
          <form action="" method="get" autocomplete="on">
            <label for="iname">Nome</label>
            <input
              className="special-input"
              type="text"
              name="Nome"
              id="iname"
              autocomplete="name"
            />
            <label for="ipreco">Preço</label>
            <input
              className="special-input"
              type="number"
              name="Preço"
              id="ipreco"
            />
            <label for="itam">Tamanho</label>

            <div className="radio-container">
              <input type="radio" name="tamanho" id="ip" />
              <label className="radio-item" for="ip">
                P
              </label>
              <input type="radio" name="tamanho" id="im" />
              <label className="radio-item" for="im">
                M
              </label>
              <input type="radio" name="tamanho" id="ig" />
              <label className="radio-item" for="ig">
                G
              </label>
              <input type="radio" name="tamanho" id="igg" />
              <label className="radio-item" for="igg">
                GG
              </label>
            </div>

            <label for="idesc">Descrição</label>
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
