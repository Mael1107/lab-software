import { useState } from "react";
import axios from "axios";
import "./styles/newproduct-page.css";

export default function Register_Product() {
  const [formData, setFormData] = useState({
    product: {
      image: "",
      name: "",
      price: "",
      sizes: "",
      description: "",
    },
  });

  const [successMessage, setSuccessMessage] = useState("");

  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.Mt3BAMqCSTT4DnjCRJC4e6Mmkz25b_nJssj4rqWMHR8";

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      product: {
        ...prev.product,
        [name]: type === "number" ? parseFloat(value) : value,
      },
    }));
  };

  const handleRadioChange = (e) => {
    setFormData((prev) => ({
      product: {
        ...prev.product,
        sizes: e.target.value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { image, name, price, sizes, description } = formData.product;

    // Validação simples de campos obrigatórios
    if (
      !image.trim() ||
      !name.trim() ||
      price === "" ||
      !sizes.trim() ||
      !description.trim()
    ) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const resposta = await axios.post(
        "http://127.0.0.1:3000/admins/product/register",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Produto cadastrado:", resposta.data);

      // Limpar o formulário
      setFormData({
        product: {
          image: "",
          name: "",
          price: "",
          sizes: "",
          description: "",
        },
      });

      // Mostrar mensagem de sucesso
      setSuccessMessage("Produto cadastrado com sucesso!");
    } catch (erro) {
      console.error("Erro ao cadastrar produto:", erro.message);
      alert("Erro ao cadastrar produto. Tente novamente.");
    }
  };

  const { product } = formData;

  return (
    <main>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <article className="essential">
        <section className="image-block"></section>

        <section className="interface-add">
          <h4>NOVO PRODUTO</h4>
          <form onSubmit={handleSubmit} autoComplete="on">
            <label htmlFor="iurl">URL da imagem</label>
            <input
              className="special-input"
              type="text"
              name="image"
              id="iurl"
              value={product.image}
              onChange={handleChange}
            />

            <label htmlFor="iname">Nome</label>
            <input
              className="special-input"
              type="text"
              name="name"
              id="iname"
              value={product.name}
              onChange={handleChange}
              autoComplete="name"
            />

            <label htmlFor="ipreco">Preço</label>
            <input
              className="special-input"
              type="number"
              name="price"
              id="ipreco"
              value={product.price}
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
                    checked={product.sizes === t}
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
              value={product.description}
              onChange={handleChange}
            ></textarea>

            <div className="buttons">
              <input id="submit-button" type="submit" value="CONFIRMAR" />
            </div>

            {successMessage && (
              <p style={{ color: "green", marginTop: "10px" }}>{successMessage}</p>
            )}
          </form>
        </section>
      </article>
    </main>
  );
}
