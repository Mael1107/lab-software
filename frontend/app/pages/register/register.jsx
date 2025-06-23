import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cpf, setCpf] = useState("");

  const navigate = useNavigate();

  const isValidCPFFormat = (cpf) => {
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidCPFFormat(cpf)) {
      alert("CPF inválido. Use o formato 000.000.000-00");
      return;
    }

    if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    try {
      await axios.post("http://127.0.0.1:3000/user/register", {
        user: {
          name,
          email,
          number,
          password,
          cpf,
          is_super: false,
        },
      });

      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        const errors = error.response.data.errors;

        if (errors.email) {
          alert("Este e-mail já está registrado.");
        } else if (errors.name) {
          alert("Este nome de usuário já está em uso.");
        } else if (errors.cpf) {
          alert("Este CPF já está registrado.");
        } else {
          alert("Erro ao registrar. Verifique os dados e tente novamente.");
        }
      } else {
        alert("Erro inesperado ao registrar. Tente novamente.");
      }
    }
  };

  return (
    <main>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <article className="essential">
        <h1>Criar uma Conta</h1>
        <p>Compre mais rápido e acompanhe seu pedido em tempo real!</p>
        <div className="form">
          <form onSubmit={handleSubmit} autoComplete="on">
            <label htmlFor="iuser">Nome de usuário</label>
            <input
              className="input-special"
              type="text"
              name="texto"
              id="iuser"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="iemail">E-mail</label>
            <input
              className="input-special"
              type="email"
              name="email"
              id="iemail"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="itel">Telefone (Opcional)</label>
            <input
              className="input-special"
              type="tel"
              name="telefone"
              id="itel"
              autoComplete="tel"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />

            <label htmlFor="icpf">CPF (formato 000.000.000-00)</label>
            <input
              className="input-special"
              type="text"
              name="cpf"
              id="icpf"
              placeholder="000.000.000-00"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
              autoComplete="on"
            />

            <label htmlFor="isen0">Senha</label>
            <input
              className="input-special"
              type="password"
              name="Senha"
              id="isen0"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
            />

            <label htmlFor="isen1">Confirmar Senha</label>
            <input
              className="input-special"
              type="password"
              name="Senha-Confirm"
              id="isen1"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              autoComplete="new-password"
            />

            <input className="input-submit" type="submit" value="Cadastrar" />
            <p>
              Já possui uma conta?{" "}
              <a href="/login" target="_self">
                Entre agora mesmo
              </a>
            </p>
          </form>
        </div>
      </article>
    </main>
  );
}
