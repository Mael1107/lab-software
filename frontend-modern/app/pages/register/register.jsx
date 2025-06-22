export default function Register() {
  return (
    <body>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <main>
        <article className="essential">
          <h1>Criar uma Conta</h1>
          <p>Compre mais rápido e acompanhe seu pedido em tempo real!</p>
          <div className="form">
            <form action="" method="post" autocomplete="on">
              <label for="iuser">Nome Completo</label>
              <input
                className="input-special"
                type="text"
                name="texto"
                id="iuser"
                autocomplete="name"
              />
              <label for="iemail">E-mail</label>
              <input
                className="input-special"
                type="email"
                name="email"
                id="iemail"
                autocomplete="email"
              />
              <label for="itel">Telefone(Opcional)</label>
              <input
                className="input-special"
                type="tel"
                name="telefone"
                id="itel"
                autocomplete="tel"
              />
              <label for="isen0">Senha</label>
              <input
                className="input-special"
                type="password"
                name="Senha"
                id="isen0"
              />
              <label for="isen1">Confirmar Senha</label>
              <input
                className="input-special"
                type="password"
                name="Senha-Confirm"
                id="isen1"
              />
              <input className="input-submit" type="submit" value="Cadastrar" />
              <p>
                Já possui uma conta?{" "}
                <a href="/login" target="_self">
                  Entre agora messmo
                </a>
              </p>
            </form>
          </div>
        </article>
      </main>
    </body>
  );
}
