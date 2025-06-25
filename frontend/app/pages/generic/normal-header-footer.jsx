import { useEffect, useState } from "react";
import "../style/header-footer.css";

const business_info = {
  whatsapp: "5585992547682",
  instagram: "strike._store",
  email: "email.muitolegal@gmail.com",
};

function Normal_Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      } catch (err) {
        console.error("Erro ao ler usuário do localStorage:", err);
        localStorage.removeItem("user");
        localStorage.removeItem("authToken");
        localStorage.removeItem("isSuper");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    localStorage.removeItem("isSuper");
    setUser(null);
    window.location.href = "/";
  };

  return (
    <header>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <section className="left">
        <a id="logo" href="/" target="_self">
          <img
            src="https://media.discordapp.net/attachments/1386548089917018143/1386548270750503027/logo.png?ex=685a1b34&is=6858c9b4&hm=1ff7d8c2ef71fd72a303c32b1695de1f1bf2bf451f251d1b1828859939393e8d&=&format=webp&quality=lossless"
            alt="logo"
          />
        </a>
        <form action="" method="get">
          <div id="caixa-busca">
            <input
              type="text"
              name="busca"
              id="ibusca"
              placeholder="Faça sua busca"
            />
            <a href="#" target="_self">
              <span className="material-icons">search</span>
            </a>
          </div>
        </form>
      </section>

      <nav>
        <span className="material-icons">call</span>
        <a href="#" target="_self">
          Atendimento
        </a>

        {user ? (
          <>
            <span className="material-icons">account_circle</span>
            <p>Olá, {user.slice(0,-1)}</p>
            <button onClick={handleLogout} className="fakebutton">{user.slice(-1)}    Sair
            </button>
          </>
        ) : (
          <>
            <span className="material-icons">account_circle</span>
            <a href="/login" target="_self">
              Entre
            </a>
            <p>ou</p>
            <a href="/registrar-se">cadastre-se</a>
          </>
        )}

        <a id="cart" href="#" target="_self">
          <span className="material-icons">shopping_cart</span>
        </a>
      </nav>
    </header>
  );
}

function Normal_Footer() {
  return (
    <footer>
      <section className="line-up-footer">
        <div className="info-footer">
          <h3>Registre seu e-mail</h3>
          <p>e receba todas as novidades em primeira mão</p>
        </div>

        <div className="info-footer">
          <form action="">
            <input
              type="email"
              name="email"
              id="iemail"
              placeholder="seu e-mail"
            />
            <input id="input-submit" type="submit" value="Cadastrar" />
          </form>
        </div>
      </section>

      <section className="line-below-footer">
        <div className="info-footer">
          <ul>
            <li>
              <a href="#" target="_self">
                Início
              </a>
            </li>
            <li>
              <a href="#" target="_self">
                Produtos
              </a>
            </li>
            <li>
              <a href="#" target="_self">
                Contato
              </a>
            </li>
            <li>
              <a href="#" target="_self">
                Guia de medidas
              </a>
            </li>
          </ul>
        </div>

        <div className="info-footer">
          <h3>Contatos</h3>
          <div className="links-contact">
            <div className="center-ico-text">
              <img src="imagens/whatsapp.png" alt="whats" />
              <a
                href={`https://wa.me/${business_info.whatsapp}`}
                target="_blank"
              >
                +55 (85) 9 9254-7682
              </a>
            </div>

            <div className="center-ico-text">
              <img src="imagens/instagram.png" alt="insta" />
              <a
                href={`https://www.instagram.com/${business_info.instagram}`}
                target="_blank"
              >
                STRIKE._STORE
              </a>
            </div>

            <div className="center-ico-text">
              <img src="imagens/o-email.png" alt="email" />
              <a href={`mailto:${business_info.email}`} target="_blank">
                {business_info.email}
              </a>
            </div>
          </div>
        </div>

        <div className="info-footer">
          <h3>Institucional</h3>
          <ul>
            <li>
              <a href="#" target="_self">
                quem somos
              </a>
            </li>
            <li>
              <a href="#" target="_self">
                nossa loja
              </a>
            </li>
            <li>
              <a href="#" target="_self">
                política de privacidade
              </a>
            </li>
            <li>
              <a href="#" target="_self">
                atacado
              </a>
            </li>
          </ul>
        </div>

        <div className="info-footer">
          <h3>Ajuda e Suporte</h3>
          <ul>
            <li>
              <a href="#" target="_self">
                política de trocas
              </a>
            </li>
            <li>
              <a href="#" target="_self">
                entrega e frete
              </a>
            </li>
            <li>
              <a href="#" target="_self">
                Trocas e Devoluções
              </a>
            </li>
            <li>
              <a href="#" target="_self"></a>Dúvidas Frequentes
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export { Normal_Header, Normal_Footer };
