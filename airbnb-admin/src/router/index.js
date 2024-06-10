import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import BookingView from "@/views/Booking/BookingView.vue";
import SignIn from "@/views/Auth/SignIn.vue";

const routes = [
  {
    path: "/",
    name: "SignIn",
    component: SignIn,
    meta: { noHeaderFooter: true },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
  },
  {
    path: "/booking",
    name: "Booking",
    component: BookingView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
