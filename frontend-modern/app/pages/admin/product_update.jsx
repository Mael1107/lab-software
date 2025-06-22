import "./styles/editproduct-page.css";

export default function Update_Product() {
  return (
    <main>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <article class="essential">
        <section class="image-block">
          <div class="container-image">
            <img
              id="logo-product"
              src="imagens/o-email.png"
              alt="imagem-produto"
            />
          </div>
        </section>

        <section class="interface-add">
          <h4>EDITAR PRODUTO</h4>
          <form action="" method="get" autoComplete="on">
            <label htmlFor="iname">Nome</label>
            <input
              class="special-input"
              type="text"
              name="Nome"
              id="iname"
              autoComplete="name"
            />
            <label htmlFor="ipreco">Preço</label>
            <input
              class="special-input"
              type="number"
              name="Preço"
              id="ipreco"
            />
            <label htmlFor="itam">Tamanho</label>

            <div class="radio-container">
              <input type="radio" name="tamanho" id="ip" />
              <label class="radio-item" htmlFor="ip">
                P
              </label>
              <input type="radio" name="tamanho" id="im" />
              <label class="radio-item" htmlFor="im">
                M
              </label>
              <input type="radio" name="tamanho" id="ig" />
              <label class="radio-item" htmlFor="ig">
                G
              </label>
              <input type="radio" name="tamanho" id="igg" />
              <label class="radio-item" htmlFor="igg">
                GG
              </label>
            </div>

            <label htmlFor="idesc">Descrição</label>
            <textarea name="device-width" id="idesc"></textarea>

            <div class="buttons">
              <button type="button" class="fakebutton">
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
