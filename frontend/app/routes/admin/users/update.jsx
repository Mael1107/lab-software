import Admin_Header from "../../../pages/admin/admin_header";
import Update_Product from "../../../pages/admin/user_update";

export default function UserUpdate() {
  return (
    <section className="bg-amber-50 min-h-screen">
      <Admin_Header />
      <Update_Product />
    </section>
  );
}
