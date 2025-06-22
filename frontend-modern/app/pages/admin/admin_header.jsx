import "./styles/insert-page.css";

export default function Admin_Header() {
  return (
    <header>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <section className="left">
        <a id="logo" href="/admins/home" target="_self">
          <img src="../../imagens/logo.png" alt="logo" />
        </a>
        <div className="user">
          <a href="#" target="_self">
            <span id="account" className="material-icons">
              account_circle
            </span>
          </a>
          <a href="#" target="_self">
            <small>Bem-Vindo de volta,</small>
            <br /> ADMIN
          </a>
        </div>
      </section>
    </header>
  );
}
