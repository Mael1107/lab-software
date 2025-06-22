import "../style/login-page.css";

export default function Login() {
  return (
    <body>
      <main>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        <article className="essential">
          <h1>Entrar</h1>
          <div className="form">
            <form action="" method="post" autoComplete="on">
              <input
                className="special-input"
                type="email"
                name="email"
                id="iemail"
                placeholder="Seu E-mail"
                autoComplete="email"
              />
              <input
                className="special-input"
                type="password"
                name="senha"
                id="isenha"
                placeholder="Sua senha"
              />
              <input className="normal-input" type="submit" value="Entrar" />
              <p>
                Não possui uma conta ainda?{" "}
                <a href="/registrar-se" target="_self">
                  Criar uma conta
                </a>
              </p>
            </form>
          </div>
        </article>
      </main>
    </body>
  );
}
