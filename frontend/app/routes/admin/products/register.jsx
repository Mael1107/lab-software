import { useEffect, useState } from "react";
import Admin_Header from "../../../pages/admin/admin_header.jsx";
import Register_Product from "../../../pages/admin/product_register.jsx";

export default function ProductRegister() {
  const [isSuper, setIsSuper] = useState(null);

  useEffect(() => {
    const storedIsSuper = localStorage.getItem("isSuper");
    if (storedIsSuper) {
      try {
        setIsSuper(JSON.parse(storedIsSuper));
      } catch {
        setIsSuper(false);
      }
    } else {
      setIsSuper(false);
    }
  }, []);

  if (isSuper === null) {
    // Pode exibir um loading enquanto checa
    return <p>Carregando...</p>;
  }

  if (!isSuper) {
    return (
      <section className="bg-amber-50 min-h-screen flex items-center justify-center">
        <h1 className="text-red-600 text-2xl font-bold">
          Você não tem acesso a essa página.
        </h1>
      </section>
    );
  }
  return (
    <section className="bg-amber-50 min-h-screen">
      <Admin_Header />
      <Register_Product />
    </section>
  );
}
