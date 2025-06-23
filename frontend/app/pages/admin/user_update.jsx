import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles/useredit-page.css";

export default function Update_User() {
  const { id } = useParams();
  const navigate = useNavigate();

  const token = localStorage.getItem("authToken");

  const api = axios.create({
    baseURL: "http://127.0.0.1:3000",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpf: "",
    phone: "",
    is_super: false,
  });

  const [originalData, setOriginalData] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get(`/admins/user/update/${id}`);
        const user = response.data.user;

        const userData = {
          name: user.name || "",
          email: user.email || "",
          password: "",
          cpf: user.cpf || "",
          phone: user.phone || "",
          is_super: user.is_super || false,
        };

        setFormData(userData);
        setOriginalData(userData);
      } catch (err) {
        console.error("Erro ao buscar usuário:", err.message);
      }
    };

    fetchUser();
  }, [id]);

  const isValidCPFFormat = (cpf) => {
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf);
  };

  const isDataEqual = (a, b) => {
    if (!a || !b) return false;
    return (
      a.name === b.name &&
      a.email === b.email &&
      a.cpf === b.cpf &&
      a.phone === b.phone &&
      a.is_super === b.is_super
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: null,
    }));
  };

  const handleRadioChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      is_super: e.target.id === "adm",
    }));
    setErrors((prev) => ({
      ...prev,
      is_super: null,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    if (!isValidCPFFormat(formData.cpf)) {
      setErrors({ cpf: "CPF inválido. Use o formato 000.000.000-00" });
      return;
    }

    const userDataForComparison = { ...formData };
    delete userDataForComparison.password;

    if (isDataEqual(userDataForComparison, originalData) && !formData.password) {
      alert("Nenhuma alteração detectada para atualizar.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        user: {
          name: formData.name,
          email: formData.email,
          cpf: formData.cpf,
          phone: formData.phone,
          is_super: formData.is_super,
        },
      };

      if (formData.password) {
        payload.user.password = formData.password;
      }

      await api.put(`/admins/user/update/${id}`, payload);

      alert("Usuário atualizado com sucesso!");
      navigate("/admins/usuarios");
    } catch (err) {
      if (err.response?.data?.errors) {
        const apiErrors = err.response.data.errors;
        const formattedErrors = {};
        for (const key in apiErrors) {
          if (apiErrors[key].length > 0) {
            formattedErrors[key] = apiErrors[key].join(", ");
          }
        }
        setErrors(formattedErrors);
      } else {
        alert("Erro ao atualizar usuário.");
      }
      console.error("Erro ao atualizar usuário:", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <article className="essential">
        <h4>Editar Usuário</h4>
        <form onSubmit={handleSubmit} autoComplete="on">
          <label htmlFor="name">Nome</label>
          <input
            className="special-input"
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error-msg">{errors.name}</p>}

          <label htmlFor="email">E-mail</label>
          <input
            className="special-input"
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error-msg">{errors.email}</p>}

          <label htmlFor="password">Senha (deixe vazio para não alterar)</label>
          <input
            className="special-input"
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />

          <label htmlFor="cpf">CPF</label>
          <input
            className="special-input"
            type="text"
            name="cpf"
            id="cpf"
            maxLength="14"
            placeholder="000.000.000-00"
            value={formData.cpf}
            onChange={handleChange}
            required
          />
          {errors.cpf && <p className="error-msg">{errors.cpf}</p>}

          <label htmlFor="phone">Telefone</label>
          <input
            className="special-input"
            type="tel"
            name="phone"
            id="phone"
            autoComplete="tel"
            maxLength="15"
            placeholder="(00) 00000-0000"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error-msg">{errors.phone}</p>}

          <label>Cargo</label>
          <div className="choose">
            <input
              type="radio"
              name="cargo"
              id="cliente"
              checked={!formData.is_super}
              onChange={handleRadioChange}
            />
            <label htmlFor="cliente">Cliente</label>

            <input
              type="radio"
              name="cargo"
              id="adm"
              checked={formData.is_super}
              onChange={handleRadioChange}
            />
            <label htmlFor="adm">Administrador</label>
          </div>
          {errors.is_super && <p className="error-msg">{errors.is_super}</p>}

          <div className="buttons">
            <button
              type="button"
              className="fakebutton"
              onClick={() => navigate("/admins/usuarios")}
              disabled={loading}
            >
              CANCELAR
            </button>

            <input
              id="submit-button"
              type="submit"
              value={loading ? "Salvando..." : "CONFIRMAR"}
              disabled={loading}
            />
          </div>
        </form>
      </article>
    </main>
  );
}
