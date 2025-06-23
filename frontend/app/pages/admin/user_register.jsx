import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles/userinsert-page.css";

export default function User_Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpf, setCpf] = useState("");
  const [number, setNumber] = useState("");
  const [role, setRole] = useState("cliente");
  const [confirmPassword, setConfirmPassword] = useState("");

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
          is_super: role === "adm",
        },
      });

      alert("Usuário cadastrado com sucesso!");
      navigate("/admins/usuarios");
    } catch (error) {
      const errors = error.response?.data?.errors;

      if (errors) {
        if (errors.name) {
          alert("Nome de usuário já foi registrado.");
        } else if (errors.email) {
          alert("E-mail já foi registrado.");
        } else if (errors.cpf) {
          alert("CPF já foi registrado.");
        } else {
          alert("Erro ao registrar usuário. Verifique os dados.");
        }
      } else {
        alert("Erro de conexão. Tente novamente.");
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
        <h4>Usuário</h4>
        <form onSubmit={handleSubmit} autoComplete="on">
          <label htmlFor="iname">Nome</label>
          <input
            className="special-input"
            type="text"
            name="Nome"
            id="iname"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="iemail">E-mail</label>
          <input
            className="special-input"
            type="email"
            name="email"
            id="iemail"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="isen">Senha</label>
          <input
            className="special-input"
            type="password"
            name="Senha"
            id="isen"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="isen1">Confirmar Senha</label>
          <input
            className="special-input"
            type="password"
            name="Senha-Confirm"
            id="isen1"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <label htmlFor="icpf">CPF</label>
          <input
            className="special-input"
            type="text"
            name="CPF"
            id="icpf"
            maxLength="14"
            placeholder="000.000.000-00"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />

          <label htmlFor="itel">Telefone</label>
          <input
            className="special-input"
            type="tel"
            name="Telefone"
            id="itel"
            autoComplete="tel"
            maxLength="15"
            placeholder="(00) 00000-0000"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />

          <label>Cargo</label>
          <div className="choose">
            <input
              type="radio"
              name="Cargo"
              id="cliente"
              checked={role === "cliente"}
              onChange={() => setRole("cliente")}
            />
            <label htmlFor="cliente">Cliente</label>
            <input
              type="radio"
              name="Cargo"
              id="adm"
              checked={role === "adm"}
              onChange={() => setRole("adm")}
            />
            <label htmlFor="adm">Administrador</label>
          </div>

          <div className="buttons">
            <button type="button" className="fakebutton" onClick={() => navigate(-1)}>
              CANCELAR
            </button>
            <input id="submit-button" type="submit" value="CONFIRMAR" />
          </div>
        </form>
      </article>
    </main>
  );
}
