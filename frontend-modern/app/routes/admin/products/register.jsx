import Admin_Header from "../../../pages/admin/admin_header.jsx";
import Register_Product from "../../../pages/admin/product_register.jsx";

export default function ProductRegister() {
  return (
    <section className="bg-amber-50 min-h-screen">
      <Admin_Header />
      <Register_Product />
    </section>
  );
}
