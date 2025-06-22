import Admin_Header from "../../pages/admin/admin_header";
import Products_Show from "../../pages/admin/products";

export default function ShowProducts() {
  return (
    <section className="bg-amber-50 min-h-screen">
      <Admin_Header />
      < Products_Show />
    </section>
  );
}
