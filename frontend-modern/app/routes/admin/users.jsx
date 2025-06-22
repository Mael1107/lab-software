import Admin_Header from "../../pages/admin/admin_header";
import Users_Show from "../../pages/admin/users";

export default function ShowUsers() {
  return (
    <section className="bg-amber-50 min-h-screen">
      <Admin_Header />
      <Users_Show />
    </section>
  );
}
