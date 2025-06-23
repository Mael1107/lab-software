import { useEffect, useState } from "react";
import AdminHeader from "../../pages/admin/admin_header";
import AdminLandingPage from "../../pages/admin/home_page";

export default function AdminHome() {
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

  // Se for super usuário, mostra normalmente
  return (
    <section className="bg-amber-50 min-h-screen">
      <AdminHeader />
      <AdminLandingPage />
    </section>
  );
}
