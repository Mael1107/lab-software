import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles/editproduct-page.css";

export default function Update_Product() {
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
    price: "",
    sizes: "",
    description: "",
    image: "",
  });

  const [originalData, setOriginalData] = useState(null);

  useEffect(() => {
    const buscarProduto = async () => {
      try {
        const resposta = await api.get(`admins/product/update/${id}`, {
          Authorization: `Bearer ${token}`,
        });
        const produto = resposta.data.product;

        const data = {
          name: produto.name || "",
          price: produto.price || "",
          sizes: produto.sizes || "",
          description: produto.description || "",
          image: produto.image || "",
        };

        setFormData(data);
        setOriginalData(data);
      } catch (err) {
        console.error("Erro ao buscar produto:", err.message);
      }
    };

    buscarProduto();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? parseFloat(value) : value,
    }));
  };

  const handleRadioChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      sizes: e.target.value,
    }));
  };

  const isDataEqual = (obj1, obj2) => {
    if (!obj1 || !obj2) return false;
    return (
      obj1.name === obj2.name &&
      obj1.price === obj2.price &&
      obj1.sizes === obj2.sizes &&
      obj1.description === obj2.description &&
      obj1.image === obj2.image
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isDataEqual(formData, originalData)) {
      alert("Nenhuma alteração detectada para atualizar.");
      return;
    }

    try {
      await api.put(`admins/product/update/${id}`, {
        product: formData,
      });

      alert("Produto atualizado com sucesso!");

      navigate("/admins/produtos");
    } catch (err) {
      console.error("Erro ao atualizar produto:", err.message);
    }
  };

  return (
    <main>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <article className="essential">
        <section className="image-block">
          <div className="container-image">
            <img
              id="logo-product"
              src={formData.image || "imagens/o-email.png"}
              alt="imagem-produto"
            />
          </div>
        </section>

        <section className="interface-add">
          <h4>EDITAR PRODUTO</h4>
          <form onSubmit={handleSubmit} autoComplete="on">
            <label htmlFor="iname">Nome</label>
            <input
              className="special-input"
              type="text"
              name="name"
              id="iname"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
            />

            <label htmlFor="ipreco">Preço</label>
            <input
              className="special-input"
              type="number"
              name="price"
              id="ipreco"
              value={formData.price}
              onChange={handleChange}
            />

            <label>Tamanho</label>
            <div className="radio-container">
              {["P", "M", "G", "GG"].map((t) => (
                <div key={t}>
                  <input
                    type="radio"
                    name="sizes"
                    id={`i${t.toLowerCase()}`}
                    value={t}
                    checked={formData.sizes === t}
                    onChange={handleRadioChange}
                  />
                  <label className="radio-item" htmlFor={`i${t.toLowerCase()}`}>
                    {t}
                  </label>
                </div>
              ))}
            </div>

            <label htmlFor="idesc">Descrição</label>
            <textarea
              name="description"
              id="idesc"
              value={formData.description}
              onChange={handleChange}
            ></textarea>

            <div className="buttons">
              <button
                type="button"
                className="fakebutton"
                onClick={() => navigate("/admins/produtos")}
              >
                CANCELAR
              </button>

              <input id="submit-button" type="submit" value="CONFIRMAR" />
            </div>
          </form>
        </section>
      </article>
    </main>
  );
}
