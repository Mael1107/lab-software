import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Products_Show() {
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState(null);
  const [carregando, setCarregando] = useState(true);

  const navigate = useNavigate();

  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.Mt3BAMqCSTT4DnjCRJC4e6Mmkz25b_nJssj4rqWMHR8";

  const api = axios.create({
    baseURL: "http://127.0.0.1:3000",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  useEffect(() => {
    const buscarDados = async () => {
      try {
        const resposta = await api.get("/");
        setDados(resposta.data);
      } catch (err) {
        setErro(err.message);
      } finally {
        setCarregando(false);
      }
    };

    buscarDados();
  }, []);

  const excluirProduto = async (id) => {
    const confirmar = window.confirm("Tem certeza que deseja excluir este produto?");
    if (!confirmar) return;

    try {
      await api.delete(`/admins/product/delete/${id}`);
      // Remove da tela sem recarregar
      setDados((prev) => ({
        ...prev,
        products: prev.products.filter((p) => p.id !== id),
      }));
      alert("Produto excluído com sucesso.");
    } catch (err) {
      console.error("Erro ao excluir produto:", err.message);
      alert("Erro ao excluir produto.");
    }
  };

  if (carregando) return <p>Carregando...</p>;
  if (erro) return <p>Erro: {erro}</p>;

  return (
    <main>
      {dados.products.map((product) => (
        <article
          key={product.id}
          className="flex gap-2 items-center justify-center bg-black text-white p-2"
        >
          <p>{product.id}</p>
          <p>{product.name}</p>
          <p>{product.sizes}</p>

          <button
            onClick={() => navigate(`/admins/produtos/editar/${product.id}`)}
            className="bg-blue-500 px-2 py-1 rounded"
          >
            Editar
          </button>

          <button
            onClick={() => excluirProduto(product.id)}
            className="bg-red-500 px-2 py-1 rounded"
          >
            Excluir
          </button>
        </article>
      ))}
    </main>
  );
}
