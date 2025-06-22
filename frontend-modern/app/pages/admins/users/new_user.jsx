import "../style/userinsert-page.css";

export default function Register_User() {
  return (
    <main>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <article className="essential">
        <h4>Usuário</h4>
        <form action="" method="post" autocomplete="on">
          <label for="iname">Nome</label>
          <input
            className="special-input"
            type="text"
            name="Nome"
            id="iname"
            autocomplete="name"
          />
          <label for="iemail">E-mail</label>
          <input
            className="special-input"
            type="email"
            name="email"
            id="iemail"
            autocomplete="email"
          />
          <label for="isen">Senha</label>
          <input
            className="special-input"
            type="password"
            name="Senha"
            id="isen"
          />
          <label for="icpf">CPF</label>
          <input
            className="special-input"
            type="text"
            name="CPF"
            id="icpf"
            maxlength="14"
            placeholder="000.000.000-00"
          />
          <label for="itel">Telefone</label>
          <input
            className="special-input"
            type="tel"
            name="Telefone"
            id="itel"
            autocomplete="tel"
            maxlength="15"
            placeholder="(00) 00000-0000"
          />
          <label for="icargo">Cargo</label>

          <div className="choose">
            <input type="radio" name="Cargo" id="cliente" />
            <label for="cliente">Cliente</label>
            <input type="radio" name="Cargo" id="adm" />
            <label for="adm">Administrador</label>
          </div>

          <div className="buttons">
            <buttons type="button" className="fakebutton">
              CANCELAR
            </buttons>

            <input id="submit-button" type="submit" value="CONFIRMAR" />
          </div>
        </form>
      </article>
    </main>
  );
}
