import { useEffect, useState } from "react";
import "../style/home-page.css";
import get from "axios";

export function Landing_Page() {
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const buscarDados = async () => {
      try {
        const resposta = await get("http://127.0.0.1:3000/");
        setDados(resposta.data);
      } catch (err) {
        setErro(err.message);
      } finally {
        setCarregando(false);
      }
    };

    buscarDados();
  }, []);

  if (carregando) return <p>Carregando...</p>;
  if (erro) return <p>Erro: {erro}</p>;

  return (
    <main className=" min-h-screen">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <section className="amostra">
        <article id="middle">
          <img src={dados.products[0].image} alt="Imagem do produto" />
        </article>
        <article id="right">
          <img src={dados.products[1].image} alt="Imagem do produto" />
        </article>
        <article id="left">
          <img src={dados.products[2].image} alt="Imagem do produto" />
        </article>
      </section>

      <section className="catalogo">
        <section className="extend">
          {dados.products.map((product) => (
            <article className="product-container" key={product.id}>
              <img
                src={product.image}
                alt="Imagem do produto"
                className="imagem-product-container"
              />
              <div className="footer-catalogo">
                <p>{product.name}</p>
                <p>R$ {product.price}</p>
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
