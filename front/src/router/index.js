import { createRouter, createWebHashHistory } from "vue-router";
import CreateTicket from "../views/CreateTicket.vue";
import ListTickets from "../views/ListTickets.vue";
import DetailOneTicket from "../views/DetailOneTicket.vue";

const routes = [
  {
    path: "/",
    name: "CreateTicket",
    component: CreateTicket,
  },
  {
    path: "/listTickets",
    name: "ListTickets",
    component: ListTickets,
  },
  {
    path: "/detailTicket/:id",
    name: "DetailOneTicket",
    component: DetailOneTicket,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
