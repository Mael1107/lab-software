import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("/welcome", "routes/welcome.jsx"),
  route("/login", "routes/login.jsx"),
  route("registrar-se", "routes/register.jsx"),

  route("/admins/home", "routes/admin/home.jsx"),
  route("/admins/usuarios", "routes/admin/users.jsx"),
  route("/admins/usuarios/registrar", "routes/admin/users/register.jsx"),
  route("/admins/usuarios/editar/:id", "routes/admin/users/update.jsx"),
  route("/admins/produtos", "routes/admin/products.jsx"),
  route("/admins/produtos/registrar", "routes/admin/products/register.jsx"),
  route("/admins/produtos/editar/:id", "routes/admin/products/update.jsx"),
];
