import "./styles/insert-page.css";

export default function Admin_Lading_Page() {
  return (
    <main>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
      />
      <article className="essential">
        <div className="block">
          <span className="material-symbols-outlined">deployed_code</span>
          <a href="/admins/produtos/registrar" target="_self">
            <p>Novo Produto</p>
          </a>
        </div>

        <div className="block">
          <span className="material-symbols-outlined">deployed_code</span>
          <a href="/admins/produtos" target="_self">
            <p>Gerenciar Produtos</p>
          </a>
        </div>

        <div className="block">
          <span className="material-symbols-outlined">person</span>
          <a href="/admins/usuarios/registrar" target="_self">
            <p>Novo Usuário</p>
          </a>
        </div>

        <div className="block">
          <span className="material-symbols-outlined">person</span>
          <a href="/admins/usuarios" target="_self">
            <p>Gerenciar Usuários</p>
          </a>
        </div>
      </article>
    </main>
  );
}
