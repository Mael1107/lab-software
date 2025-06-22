import { index, route } from "@react-router/dev/routes";

export default [
     index("routes/home.jsx"),
     route("/welcome", "routes/welcome.jsx"),
     route ("/login", "routes/login.jsx"),
     route("registrar-se", "routes/register.jsx"),

     route("/admins/home", "routes/admin/home.jsx"),
     route("/admins/usuarios", "routes/admin/users.jsx"),
     route("/admins/produtos", "routes/admin/products.jsx"),
     route("/admins/registrar/usuario", "routes/admin/register_user.jsx"),
     route("/admins/editar/usuario", "routes/admin/edit_user.jsx"),
     route("/admins/registrar/produto", "routes/admin/register_product.jsx"),
     route("/admins/editar/produto", "routes/admin/edit_product.jsx")
];