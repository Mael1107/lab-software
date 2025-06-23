import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/login-page.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Faz login e recebe token + usuário
      const response = await axios.post("http://127.0.0.1:3000/user/login", {
        user: {
          email,
          password: senha,
        },
      });

      const token = response.data.token;
      const user = response.data.user;

      // Armazena token e usuário no localStorage
      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(user));

      let isSuper = false;

      try {
        // Verifica se usuário é super, passando user.name
        const superResponse = await axios.get(
          `http://127.0.0.1:3000/admins/user/${user}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        isSuper = superResponse.data.is_super;
      } catch (error) {
        if (error.response && error.response.status === 403) {
          // Usuário não super, autorizado a continuar no site normal
          isSuper = false;
        } else {
          // Outro erro, mostrar no console e abortar
          console.error("Erro ao verificar status de super usuário:", error);
          return;
        }
      }

      // Armazena status isSuper no localStorage
      localStorage.setItem("isSuper", JSON.stringify(isSuper));

      if (isSuper) {
        const confirmRedirect = window.confirm(
          "Você é um usuário administrador. Deseja ir para a área administrativa?"
        );

        if (confirmRedirect) {
          navigate("/admins/home");
        } else {
          navigate("/");
        }
      } else {
        navigate("/");
      }
    } catch (err) {
      console.error("Erro ao fazer login:", err.message);
    }
  };

  return (
    <main>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <article className="essential">
        <h1>Entrar</h1>
        <div className="form">
          <form autoComplete="on" onSubmit={handleSubmit}>
            <input
              className="special-input"
              type="email"
              name="email"
              id="iemail"
              placeholder="Seu E-mail"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="special-input"
              type="password"
              name="senha"
              id="isenha"
              placeholder="Sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
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
  );
}
