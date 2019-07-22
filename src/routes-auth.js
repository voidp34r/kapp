// @material-ui/icons
import Person from "@material-ui/icons/Person";
// core components/views for Auth layout
import LoginPage from "views/LoginPage/LoginPage";


const dashboardRoutes = [
  {
    path: "/registre",
    name: "Register",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: LoginPage,
    layout: "/auth"
  },
  {
    path: "/login",
    name: "Login",
    rtlName: "قائمة الجدول",
    icon: "lock",
    component: LoginPage,
    layout: "/auth"
  }
  
];

export default dashboardRoutes;
