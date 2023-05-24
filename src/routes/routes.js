import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Login from "@/pages/Login.vue"
import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Table from "@/pages/Table.vue";

const session = localStorage.getItem('session');

const routes = [
  {
    path: "/",
    component: session ? DashboardLayout : Login,
    redirect: session ? "/dashboard" : undefined,
    meta: {
      requiredAuth: true,
    },
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "user",
        name: "Benutzerprofil",
        component: UserProfile,
      },
      {
        path: "table",
        name: "Tabellen",
        component: Table,
      },
      {
        path: "storage",
        name: "Speicher",
        component: Storage,
      },
    ],
  },
];

export default routes;
