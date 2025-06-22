import AdminHeader from "../../pages/admin/admin_header";
import AdminLandingPage from "../../pages/admin/home_page";

export default function AdminHome() {
     return (
          <section className="bg-amber-50 min-h-screen">
               <AdminHeader />
               <AdminLandingPage />
          </section>
     )
}