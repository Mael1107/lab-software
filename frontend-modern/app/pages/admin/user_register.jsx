import "./styles/userinsert-page.css";

export default function User_Register() {
  return (
    <main>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <article className="essential">
        <h4>Usuário</h4>
        <form action="" method="post" autoComplete="on">
          <label htmlFor="iname">Nome</label>
          <input
            className="special-input"
            type="text"
            name="Nome"
            id="iname"
            autoComplete="name"
          />
          <label htmlFor="iemail">E-mail</label>
          <input
            className="special-input"
            type="email"
            name="email"
            id="iemail"
            autoComplete="email"
          />
          <label htmlFor="isen">Senha</label>
          <input
            className="special-input"
            type="password"
            name="Senha"
            id="isen"
          />
          <label htmlFor="icpf">CPF</label>
          <input
            className="special-input"
            type="text"
            name="CPF"
            id="icpf"
            maxlength="14"
            placeholder="000.000.000-00"
          />
          <label htmlFor="itel">Telefone</label>
          <input
            className="special-input"
            type="tel"
            name="Telefone"
            id="itel"
            autoComplete="tel"
            maxlength="15"
            placeholder="(00) 00000-0000"
          />
          <label >Cargo</label>

          <div className="choose">
            <input type="radio" name="Cargo" id="cliente" />
            <label htmlFor="cliente">Cliente</label>
            <input type="radio" name="Cargo" id="adm" />
            <label htmlFor="adm">Administrador</label>
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
