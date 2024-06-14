import { LuLayoutDashboard, LuShoppingCart, LuUsers } from "react-icons/lu";
export const navigation = [
  {
    category: "خانه",
    links: [{ title: "داشبورد", slug: "/dashboard", icon: LuLayoutDashboard }],
  },
  {
    category: "جداول",
    links: [
      { title: "محصولات", slug: "products", icon: LuShoppingCart },
      { title: "کاربران", slug: "users", icon: LuUsers },
    ],
  },
];
