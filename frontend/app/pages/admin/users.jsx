import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Users_Show() {
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState(null);
  const [carregando, setCarregando] = useState(true);

  const navigate = useNavigate();

  const token = localStorage.getItem("authToken"); // Ideal pegar o token do localStorage

  const api = axios.create({
    baseURL: "http://127.0.0.1:3000",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  useEffect(() => {
    const buscarDados = async () => {
      try {
        // Ajuste a rota conforme sua API para buscar usuários
        const resposta = await api.get("/admins/user"); 
        setDados(resposta.data);
      } catch (err) {
        setErro(err.message || "Erro ao buscar usuários");
      } finally {
        setCarregando(false);
      }
    };

    buscarDados();
  }, []);

  const excluirUsuario = async (id) => {
    const confirmar = window.confirm("Tem certeza que deseja excluir este usuário?");
    if (!confirmar) return;

    try {
      await api.delete(`admins/user/delete/${id}`); // ajuste a rota para exclusão de usuário
      setDados((prev) => ({
        ...prev,
        users: prev.users.filter((u) => u.id !== id),
      }));
      alert("Usuário excluído com sucesso.");
    } catch (err) {
      console.error("Erro ao excluir usuário:", err.message);
      alert("Erro ao excluir usuário.");
    }
  };

  if (carregando) return <p>Carregando...</p>;
  if (erro) return <p>Erro: {erro}</p>;

  if (!dados || !dados.users || dados.users.length === 0) {
    return <p>Nenhum usuário encontrado.</p>;
  }

  return (
    <main>
      {dados.users.map((user) => (
        <article
          key={user.id}
          className="flex gap-2 items-center justify-center bg-black text-white p-2"
        >
          <p>ID: {user.id}</p>
          <p>Nome: {user.name}</p>
          <p>Email: {user.email}</p>

          <button
            onClick={() => navigate(`/admins/usuarios/editar/${user.id}`)}
            className="bg-blue-500 px-2 py-1 rounded text-white"
          >
            Editar
          </button>

          <button
            onClick={() => excluirUsuario(user.id)}
            className="bg-red-500 px-2 py-1 rounded text-white"
          >
            Excluir
          </button>
        </article>
      ))}
    </main>
  );
}
