import { Header, Footer } from "../header-footer";
import { useEffect, useState } from "react";
import "./style/home-page.css";

async function Get_Products() {
  try {
    const response = await fetch("http://127.0.0.1:3000");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return { products: [] }; // Retorna um array vazio em caso de erro
  }
}

function Index() {
  const [data, setData] = useState({ products: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const productsData = await Get_Products();
        setData(productsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Carregando produtos...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <main>
      <section className="amostra">
        <article id="middle" className="">
          <img src={data.products[0].image} alt="" />
        </article>
        <article id="right" className="">
          <img src={data.products[1].image} alt="" />
        </article>
        <article id="left" className="">
          <img src={data.products[2].image} alt="" />
        </article>
      </section>
      <section className="catalogo">
        <section className="extend">
          {data.products.map((product) => (
            <article key={product.id} className="product-container">
              <img
                className="imagem-product-container"
                src={product.image}
                alt="Imagem do produto"
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

export function LadingPage() {
  return (
    <body>
      <Header />
      <Index />
      <Footer />
    </body>
  );
}
