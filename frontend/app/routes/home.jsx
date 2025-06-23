
import { useEffect } from "react";
import { Normal_Footer, Normal_Header } from "../pages/generic/normal-header-footer"
import { Landing_Page } from "../pages/homepage/home";

export function meta() {
  return [
    { title: "Strike Store" },
    { name: "description", content: "Bem vindos a maior loja de roupas de Itapajé!" },
  ];
}

export default function home() {
  useEffect(() => {
    if (!sessionStorage.getItem("reloaded")) {
      sessionStorage.setItem("reloaded", "true");
      window.location.reload();
    } else {
      sessionStorage.removeItem("reloaded");
    }
  }, []);

  return (
     <body>
      < Normal_Header />
      < Landing_Page />
      < Normal_Footer />
     </body>
  )
}
