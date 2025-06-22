import Admin_Header from "../../../pages/admin/admin_header";
import User_Register from "../../../pages/admin/user_register";

export default function UserRegister () {
     return (
          <section className="bg-amber-50 min-h-screen">
               <Admin_Header />
               <User_Register />
          </section>
     )
}