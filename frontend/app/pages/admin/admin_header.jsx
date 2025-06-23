import { useEffect, useState } from "react";
import "./styles/insert-page.css";

export default function Admin_Header() {
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
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/"; // Redireciona para página inicial após logout
  };

  return (
    <header>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <section className="left">
        <a id="logo" href="/admins/home" target="_self">
          <img
            src="https://media.discordapp.net/attachments/1386548089917018143/1386548270750503027/logo.png?ex=685a1b34&is=6858c9b4&hm=1ff7d8c2ef71fd72a303c32b1695de1f1bf2bf451f251d1b1828859939393e8d&=&format=webp&quality=lossless"
            alt="logo"
          />
        </a>

        {user ? (
          <div className="user">
            <span id="account" className="material-icons" style={{ verticalAlign: 'middle' }}>
              account_circle
            </span>
            <span style={{ marginLeft: "8px"}}>
              <small>Bem-vindo de volta, {user}</small>
            </span>
            <button
              onClick={handleLogout}
              className="fakebutton"
              style={{ marginLeft: "20px", cursor: "pointer" }}
              aria-label="Logout"
            >
              Sair
            </button>
          </div>
        ) : (
          <div className="user">
            <a href="/admins/login" target="_self">
              <span id="account" className="material-icons">
                account_circle
              </span>
              <span style={{ marginLeft: "8px" }}>Entrar como Admin</span>
            </a>
          </div>
        )}
      </section>
    </header>
  );
}
